import React from 'react';
import { PageHead } from '../../../components/PageHead';
import { BackButton } from '../../../components/BackButton';
import {
  HandOffByIdQuery,
  PracticeYieldTypeEnum,
  useHandOffByIdQuery,
  useSubmitHandoffMutation,
  YieldPracticeInputFragment,
} from '../../../generated/graphql';
import { Loader } from '../../../components/Loader';
import { isAfter, isBefore } from 'date-fns';
import { useTimeInterval } from '../../../hooks/useTimeInterval';
import { Input, TextArea } from '../../../components/Input';
import { CardBox } from '../../../components/CardBox';
import { Form, Formik } from 'formik';
import { Alert } from '../../../components/Alert';
import * as yup from 'yup';
import { Button } from '../../../components/Button';
import { useFormikMutationSubmitWithNavigate } from '../../../hooks/useFormikMutationSubmit';
import { ObjectSchema } from 'yup';
import { DebugJson } from '../../../components/DebugJson';
// TODO FIX THIS WAY OF IMPORTING THE COMPONENT
// eslint-disable-next-line no-restricted-imports
import { CodeInputFieldLazy } from '../../../components/CodeInput/CodeInputFieldLazy';
import { useRouter } from 'next/router';
import { getLayoutRoleStudent } from '../../../layouts/WithRole';
import { routes } from '../../../routGetters';
import { FormatTimeLeft } from '../../../cmpToSort/FormatTimeLeft';

const InputBlock: React.FC<
  React.PropsWithChildren<{ label: string; description?: string | null }>
> = ({ label, description, children }) => (
  <div className="py-4">
    <div className="mb-1 font-bold text-lg leading-relaxed">{label}</div>
    {description && <div className="font-light mb-3">{description}</div>}
    {children}
  </div>
);
type FormInputElem = React.FC<{ data: YieldPracticeInputFragment }>;

const GitField: FormInputElem = ({ data }) => {
  return (
    <InputBlock label={data.name} description={data.description}>
      <div className="mb-2">
        <Alert>
          <ul className="list-disc ml-4">
            <li>
              All git url will be{' '}
              <span className="font-semibold">cloned at submit</span>.
            </li>
            <li>
              It should be{' '}
              <span className="font-semibold">a public git repository.</span>
            </li>
          </ul>
        </Alert>
      </div>
      <Input label="Git HTTP(S) url" name={`${data.id}.value`} />
    </InputBlock>
  );
};

const BlobField: FormInputElem = ({ data }) => {
  return (
    <InputBlock label={data.name} description={data.description}>
      <TextArea
        label={data.meta?.label ?? 'Your input'}
        name={`${data.id}.value`}
      />
    </InputBlock>
  );
};

const UrlInput: FormInputElem = ({ data }) => {
  return (
    <InputBlock label={data.name} description={data.description}>
      <Input label={data.meta?.label ?? 'The URL'} name={`${data.id}.value`} />
    </InputBlock>
  );
};

const CodeYieldInput: FormInputElem = ({ data }) => {
  return (
    <InputBlock label={data.name} description={data.description}>
      <CodeInputFieldLazy
        lang={data.meta.lang}
        name={`${data.id}.value`}
        label={`Code input (${data.meta.lang})`}
      />
    </InputBlock>
  );
};

const FormElementsByMethod: Record<PracticeYieldTypeEnum, FormInputElem> = {
  GIT_REPO: GitField,
  BLOB: BlobField,
  CODE: CodeYieldInput,
  URL: UrlInput,
};

const Validation: Record<PracticeYieldTypeEnum, ObjectSchema> = {
  GIT_REPO: yup.object({
    value: yup.string().url('Git url is not a valid url'),
  }),
  BLOB: yup.object({
    value: yup.string(),
  }),
  CODE: yup.object({
    value: yup.string(),
  }),
  URL: yup.object({
    value: yup.string().url('This is not a valid url'),
  }),
};

interface HandoffForm {
  [key: string]: {
    value: string;
  };
}

const HandOffBody: React.FC<{ data: HandOffByIdQuery }> = ({ data }) => {
  useTimeInterval(1);
  const [{ fetching }, submitHandoff] = useSubmitHandoffMutation();
  const currDate = new Date();
  const close = new Date(data.practiceToCourseByPk?.closeDate);
  const open = new Date(data.practiceToCourseByPk?.openDate);
  const isOpen = isAfter(currDate, open) && isBefore(currDate, close);
  const onSubmit = useFormikMutationSubmitWithNavigate({
    mutation: submitHandoff,
    successMessage: 'Succesfully submit handoff',
    mapFormData: (values: HandoffForm) => ({
      practiceToPromotionId: data?.practiceToCourseByPk?.id,
      yields: Object.entries(values).map(([yieldId, { value }]) => ({
        value,
        yieldId,
      })),
    }),
  });

  if (!isOpen) {
    return (
      <div className="mt-4 font-semibold text-xl">This handoff is over.</div>
    );
  }
  const yeilds = data?.practiceToCourseByPk?.practice?.practiceYields ?? [];
  const initialValues: HandoffForm = yeilds
    .map(({ id }) => ({ [id]: { value: '' } }))
    .reduce((prev, curr) => ({ ...prev, ...curr }), {});
  return (
    <CardBox>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={yup.object(
          yeilds
            .map(({ id, method }) => ({
              [id]: Validation[method],
            }))
            .reduce((prev, curr) => ({ ...prev, ...curr }), {})
        )}
      >
        {({ isValid, isValidating, values }) => (
          <Form className="flex flex-col">
            <Alert title="Be carefull">
              All handoff are <span className="font-semibold">permanent</span>,
              and{' '}
              <span className="font-semibold">no second try can be done.</span>.
            </Alert>
            <div className="my-4 text-2xl font-semibold">
              What you need to handoff :
            </div>
            <div className="space-y-4 divide-y">
              {yeilds.map((value, index) => {
                const ToRender = FormElementsByMethod[value.method];
                return <ToRender data={value} key={index} />;
              })}
            </div>
            <div className="mt-4">
              <FormatTimeLeft close={close} open={open} />
            </div>
            {fetching ? (
              <Loader />
            ) : (
              <div className="mt-5 flex flex-col">
                <Button disabled={!isValid || isValidating} type="submit">
                  Submit
                </Button>
              </div>
            )}
            <DebugJson json={values} />
          </Form>
        )}
      </Formik>
    </CardBox>
  );
};

export const HandOffId = () => {
  const router = useRouter();
  const { handoffId } = router.query;

  const [{ data, error, fetching }] = useHandOffByIdQuery({
    variables: { id: handoffId },
  });
  if (fetching && !data) {
    return <Loader />;
  }
  if (!data?.practiceToCourseByPk || error) {
    router.push(routes.handoff());
  }

  if ((data?.practiceToCourseByPk?.practiceToStudents?.length ?? 0) > 0) {
    router.push(routes.handoff());
  }
  let body = <div />;
  if (data) {
    body = <HandOffBody data={data} />;
  }
  return (
    <>
      <PageHead className="">
        <div className="flex items-center">
          <BackButton className="mr-2" />
          {'Handoff for '} {data?.practiceToCourseByPk?.practice.title}
        </div>
      </PageHead>
      {body}
    </>
  );
};

HandOffId.getLayout = getLayoutRoleStudent;

export default HandOffId;
