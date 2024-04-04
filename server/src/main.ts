import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { ValidationPipe } from '@nestjs/common';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(session({
    secret: 'qwertyuiop',
saveUninitialized: false,
resave: false,
cookie: {
  maxAge: 7200000,
},
  }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.useGlobalPipes(new ValidationPipe());

const config = new DocumentBuilder()
.setTitle('FemCodersClub')
.setDescription('This API provides a CRUD for the femCodersClub web')
.setVersion('1.0')
.addBearerAuth({
  type:'http',
  scheme:'bearer',
  bearerFormat:'JWT',
  in:'header'
})
.build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
await app.listen(3000);
}
bootstrap();
