import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin: true, methods: ["GET", "POST", "PUT", "DELETE"]});
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
  await app.listen(3000);
}
bootstrap();
