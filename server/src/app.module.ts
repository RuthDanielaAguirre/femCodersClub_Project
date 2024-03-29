import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VolunteerModule } from './volunteer/volunteer.module';
import { PassportModule } from '@nestjs/passport';
import { EventsModule } from './events/events.module';
import { FaqModule } from './faq/faq.module';
import { MemberModule } from './member/member.module';
import { SponsorModule } from './sponsor/sponsor.module';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-femcodersclub-femcodersclubproject-p8.a.aivencloud.com',
      port: 20668,
      username: 'avnadmin',
      password: 'AVNS_LRnQtzlbOaJUUkubhbp',
      database: 'mydb',
      entities: ['dist/**/*.entity.js'],
      synchronize: false,
    }),
    AuthModule, 
    UserModule,
    PassportModule.register({session: true}),
    EventsModule,
    VolunteerModule,
    FaqModule,
    MemberModule,
    SponsorModule,
    AdminModule,
    HttpModule
  ],
  controllers: [AppController],
  providers: [AppService],
  

})
export class AppModule {}
