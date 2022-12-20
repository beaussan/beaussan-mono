import { z } from 'zod';

export const routerDomainSchema = z.object({
  main: z.string(),
  sans: z.array(z.string()),
});

export const routerTlsSchema = z.object({
  certResolver: z.string(),
  domains: z.array(routerDomainSchema).optional(),
});

export const routerApiDefinitionSchema = z.object({
  entryPoints: z.array(z.string()),
  service: z.string(),
  rule: z.string(),
  tls: routerTlsSchema.optional(),
  status: z.string(),
  using: z.array(z.string()),
  name: z.string(),
  provider: z.string(),
  middlewares: z.array(z.string()).optional(),
  priority: z.number().optional(),
});

export type RouterApiDefinition = z.infer<typeof routerApiDefinitionSchema>;

export type RouterTls = z.infer<typeof routerTlsSchema>;

export type RouterDomain = z.infer<typeof routerDomainSchema>;
