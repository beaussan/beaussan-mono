import {
  getTraefikRouters,
  RouterApiDefinition,
} from '@beaussan/shared/data-access/traefik-read-api';
import { Sdk } from '@beaussan/dash/data-access/backend-admin-sdk';
import { TraefikRoutesInsertInput } from '@beaussan/dash/types/hasura-codegen-types';
import { formatHasuraDate } from '@beaussan/shared/utils/hasura-ts';
import { AxiosError } from 'axios';
import { ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';
import { ClientError } from 'graphql-request';

export type TraefikSyncDbStatus =
  | {
      status: 'ok';
    }
  | {
      status: 'error';
      error: string;
    };

export const calculateUrl = (rule: string): string | undefined => {
  if (rule.includes('||')) {
    return undefined;
  }

  if (rule.match(/&&.*&&/)) {
    return undefined;
  }

  if (rule.includes('PathPrefix')) {
    if (!rule.includes('&& PathPrefix(`/`)')) {
      return undefined;
    }
  }

  const fqdn = rule.match(/Host\(`(.+?)`\)/)?.[1];
  if (!fqdn) {
    return undefined;
  }
  return `https://${fqdn}`;
};

const mapFromApiToInsert =
  (lastSeenAlive: string) =>
  (input: RouterApiDefinition): TraefikRoutesInsertInput => {
    return {
      isUp: true,
      calculatedUrl: calculateUrl(input.rule),
      name: input.name,
      lastSeenAlive,
      provider: input.provider,
      rule: input.rule,
      service: input.service,
    };
  };

export async function traefikSyncDb(
  gqlSdk: Sdk,
  traefikBaseUrl: string
): Promise<TraefikSyncDbStatus> {
  try {
    console.log('start get routeurs');
    const data = await getTraefikRouters(traefikBaseUrl);
    console.log('done get routeurs');

    const currentDate = formatHasuraDate(new Date());

    const mappedValues = data
      .map(mapFromApiToInsert(currentDate))
      .filter((value) => value.calculatedUrl !== undefined);

    await gqlSdk.upsertTraefikRoutesIntoDb({ insertData: mappedValues });
    await gqlSdk.setAllDownNodesBasedOnLastUpdate({ update: currentDate });

    return {
      status: 'ok',
    };
  } catch (e) {
    if (e instanceof AxiosError) {
      return {
        status: 'error',
        error: e.message,
      };
    }
    if (e instanceof ZodError) {
      return {
        status: 'error',
        error: fromZodError(e).message,
      };
    }
    if (e instanceof ClientError) {
      return {
        status: 'error',
        error: e.response.errors?.join('; ') ?? e.message,
      };
    }
    console.error('Unknown error', e);
    return {
      status: 'error',
      error: JSON.stringify(e),
    };
  }
}
