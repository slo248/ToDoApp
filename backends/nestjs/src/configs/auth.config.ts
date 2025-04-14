import { z } from 'zod';

const zodAuthConfig = z.object({
  jwtSecret: z.string().default('jwt_secret'),
  jwtExpiresIn: z.string().default('1h'),
});

export type AuthConfig = z.infer<typeof zodAuthConfig>;

export default (): AuthConfig =>
  zodAuthConfig.parse({
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN,
  });
