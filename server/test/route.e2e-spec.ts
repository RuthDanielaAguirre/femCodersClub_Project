import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';


describe('AppController (E2E) - Non-existent Route', () => {
    let app: INestApplication;
  
    beforeEach(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
      }).compile();
  
      app = moduleFixture.createNestApplication();
      await app.init();
    });
  
    afterEach(async () => {
      if (app) {
        await app.close();
      }
    });
  
    it('should return 404 Not Found', async () => {
      
      await request(app.getHttpServer())
        .get('/ruta-no-existente')
        .expect(404);
    });
  });
  