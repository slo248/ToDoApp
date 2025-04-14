import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import authConfig from './configs/auth.config';
import generalConfig from './configs/general.config';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [generalConfig, authConfig],
    }),
    AuthModule,
    UsersModule,
    TasksModule,
  ],
})
export class AppModule {}
