import {
  RouterApiDefinition,
  routerApiDefinitionSchema,
} from './traefik.types';
import { z } from 'zod';
import axios from 'axios';
const routersUrl = '/api/http/routers';

export const getTraefikRouters = async (
  baseUrl: string
): Promise<RouterApiDefinition[]> => {
  const result = await axios.get(`${baseUrl}${routersUrl}`);
  return z.array(routerApiDefinitionSchema).parse(result.data);
};
