import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true,        // loads .env from root into process.env
    }),
    ProfilesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
