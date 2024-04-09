import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';


describe('AppController (E2E) - Response Format', () => {
  let app: INestApplication;

  beforeEach(async () => {
    
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
   
    await app.close();
  });

  it('should return HTML content with status code 200', async () => {
   
    const response = await request(app.getHttpServer())
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200);

 
    expect(response.text).toContain('Hello World!');
  });
});
  