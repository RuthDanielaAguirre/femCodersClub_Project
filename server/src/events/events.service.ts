import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, catchError, identity, map, tap } from 'rxjs';


@Injectable()
export class EventbriteService {
  constructor(private readonly httpService: HttpService) {}

  createEvent(createEventDto: CreateEventDto): Observable<any> {
    return this.httpService
      .post(
        `${process.env.EVENTBRITE_URL_CREATE_EVENT}`,
        createEventDto,
        {
          headers: {
            Authorization: `Bearer ${process.env.EVENTBRITE_API_KEY}`,
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
    // console.log(idOrganization);
    return this.httpService
      .get(`${process.env.EVENTBRITE_URL_FINDALL_EVENT}`
      ,
        {
          headers: {
            Authorization: `Bearer ${process.env.EVENTBRITE_API_KEY}`,
          },
        },
      )
      .pipe(
        tap((response) => console.log(response.data)),
        map((response) => response.data),
        catchError((error) => {
          throw error;
        }),
      );
  }

  async findAllPastEvents() {
    // console.log(idOrganization);
    return this.httpService
      .get(`${process.env.EVENTBRITE_URL_FINDALLPAST_EVENTS}`
      ,
        {
          headers: {
            Authorization: `Bearer ${process.env.EVENTBRITE_API_KEY}`,
          },
        },
      )
      .pipe(
        tap((response) => console.log(response.data)),
        map((response) => response.data),
        catchError((error) => {
          throw error;
        }),
      );
  }

  async findAllUpcomingEvents() {
    // console.log(idOrganization);
    return this.httpService
      .get(`${process.env.EVENTBRITE_URL_FINDALLUPCOMING_EVENTS}`
      ,
        {
          headers: {
            Authorization: `Bearer ${process.env.EVENTBRITE_API_KEY}`,
          },
        },
      )
      .pipe(
        tap((response) => console.log(response.data)),
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
    console.log('Iniciando solicitud de actualización del evento...')
    return this.httpService
      .post(
        `${process.env.EVENTBRITE_URL_UPDATE_EVENT}${idEvent}`,
        updateEventDto,
        {
          headers: {
            Authorization: `Bearer ${process.env.EVENTBRITE_API_KEY}`,
            Accept: 'application/json',
          },
        },
      )
      .pipe(
        map((response) => {
          console.log('Respuesta recibida:', response);
          return response.data}),
        catchError((error) => {
          throw error;
        }),
      );      
  }
}
