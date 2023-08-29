import { handlerFn, HandlerMap } from './types';
import slug from 'slug';
import { gqlSdk } from '../../gql';
import { HttpsError } from '../../common/HttpsError';
import { giteaApi } from '../../gitea/giteaApi';

const generateSlugOrgName = async (id: string): Promise<string> => {
  const data = await gqlSdk.getPracticeToPromotionMeta({
    id,
  });
  if (
    !data ||
    !data.practiceToCourseByPk ||
    !data.practiceToCourseByPk.practice ||
    !data.practiceToCourseByPk.course
  ) {
    throw new HttpsError('invalid-argument', 'could not get course data');
  }
  const {
    practiceToCourseByPk: {
      practice: { title },
      course: { name, years },
    },
  } = data;
  return slug(`${years} ${name} ${title}`, { lower: false });
};

interface PracticeToPromo {
  id: string;
  promotion_id: string;
  practice_id: string;
  gitea_org_name?: string;
}

const onPracticeToPromoCreated: handlerFn<PracticeToPromo> = async (data) => {
  const after = data.event.data.new;
  if (!after) {
    throw new HttpsError('internal', 'No after found');
  }
  const orgName = await generateSlugOrgName(after.id);

  await giteaApi.orgs.orgCreate({
    username: orgName,
    description: `Practice generated for promotion ${after.promotion_id}`,
  });

  await gqlSdk.updateGiteaOrgName({
    id: after.id,
    gitea_org_name: orgName,
  });

  return 'ok';
};
const onPracticeToPromoDeleted: handlerFn<PracticeToPromo> = async (data) => {
  const before = data.event.data.old;
  if (!before) {
    throw new HttpsError('internal', 'No after found');
  }
  if (!before.gitea_org_name) {
    return 'No org found';
  }

  await giteaApi.orgs.orgDelete(before.gitea_org_name);

  return 'ok';
};

export const handlersPracticeToPromoToGitea: HandlerMap = {
  on_practice_to_promo_created: onPracticeToPromoCreated,
  on_practice_to_promo_deleted: onPracticeToPromoDeleted,
};
