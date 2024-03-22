import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
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
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
  

})
export class AppModule {}
