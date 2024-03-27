import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, catchError, map } from 'rxjs';

@Injectable()
export class EventbriteService {
  constructor(private readonly httpService: HttpService) {}

  createEvent(createEventDto: CreateEventDto): Observable<any> {
    return this.httpService
      .post(
        `https://www.eventbriteapi.com/v3/organizations/2076189237573/events/`,
        createEventDto,
        {
          headers: {
            Authorization: `Bearer DCSSDPUMSEBOT4WC5R2C`,
            'Content-Type': 'application/json',
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

  updateEvent(
    idEvent: number,
    updateEventDto: UpdateEventDto,
  ): Observable<any> {
    return this.httpService
      .post(
        `https://www.eventbriteapi.com/v3/events/${idEvent}`,
        updateEventDto,
        {
          headers: {
            Authorization: `Bearer DCSSDPUMSEBOT4WC5R2C`,
            Accept: 'application/json',
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
