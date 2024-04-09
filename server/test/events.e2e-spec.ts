import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { EventsModule } from '../src/events/events.module';
import { of } from 'rxjs';

import { HttpModule, HttpService } from '@nestjs/axios';




describe('EventsController (E2E) - Create Event', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [EventsModule, HttpModule],
    })
    .overrideProvider(HttpService)  
    .useValue({
      post: jest.fn().mockImplementation(() => of({
        data: { id: '1' },
        headers: {},
        config: {
          url: 'http//mock.url',
          headers: undefined,
        },
        status: 201,
        statusText: 'Created',
      })),
    })
    .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/events/create/event (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/events/create/event')
      .send({
        event: {
          name: {
            html: 'Test Event',
          },
          start: {
            timezone: 'Europe/Madrid',
            utc: '2024-04-03T10:00:00Z',
          },
          end: {
            timezone: 'Europe/Madrid',
            utc: '2024-04-03T12:00:00Z',
          },
          currency: 'EUR',
        },
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toMatchObject({ id: '1' });
  });

  afterEach(async () => {
    await app.close();
  });
});



const data = [
  {
    id: 1,
    name: 'Evento 1',
    start: {
      timezone: 'UTC',
      utc: new Date('2024-04-10T10:00:00Z'),
    },
    end: {
      timezone: 'UTC',
      utc: new Date('2024-04-10T12:00:00Z'),
    },
    currency: 'USD',
  },
  {
    id: 2,
    name: 'Evento 2',
    start: {
      timezone: 'UTC',
      utc: new Date('2024-04-15T10:00:00Z'),
    },
    end: {
      timezone: 'UTC',
      utc: new Date('2024-04-15T12:00:00Z'),
    },
    currency: 'EUR',
  },
];

describe('EventsController (E2E) - Get List of Events with /events Endpoint', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [EventsModule, HttpModule],
    })
      .overrideProvider(HttpService)  
      .useValue({
        get: jest.fn().mockImplementation(() => of({
          data,
          headers: {},
          config: {
            url: 'http//mock.url',
            headers: undefined,
          },
          status: 200,
          statusText: 'OK',
        })),
      })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/events/api/list (GET)', () => {
    
    return request(app.getHttpServer())
      .get('/events/api/list')
      .expect(200)
  });
});
