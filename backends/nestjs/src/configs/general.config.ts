import { z } from 'zod';

const zodGeneralConfig = z.object({
  port: z.number().default(3000),
  appMode: z.enum(['production', 'development']).default('development'),
});

export type GeneralConfig = z.infer<typeof zodGeneralConfig>;

export default (): GeneralConfig =>
  zodGeneralConfig.parse({
    port: process.env.PORT,
    appMode: process.env.APP_MODE,
  });
