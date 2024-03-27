import { Injectable } from '@nestjs/common';

import { HttpService } from '@nestjs/axios';
import { Observable, map, pipe, catchError } from 'rxjs';

@Injectable()
export class EventsService {
  constructor(private readonly httpService: HttpService) {}

  async findAll() {
    this.httpService
      .get(
        `https://www.eventbriteapi.com/v3/organizations/${process.env.EVENTBRITE_ID_ORGANIZATION}/events`,
        {
          headers: {
            Authorization: `Bearer ${process.env.EVENTBRITE_API_KEY}`,
          },
        },
      )
      .pipe(
        map((response) => response.data),
        catchError((error) => {
          throw error;
        }),
      );
  }
}
