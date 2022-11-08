import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

const configOptions = {
  envFilePath:
    process.env.NODE_ENV === 'production'
      ? '.production.env'
      : process.env.NODE_ENV === 'stage'
      ? '.stage.env'
      : '.development.env',
};

@Module({
  imports: [ConfigModule.forRoot(configOptions), UsersModule],
  controllers: [AppController],
  providers: [ConfigService],
})
export class AppModule {}
