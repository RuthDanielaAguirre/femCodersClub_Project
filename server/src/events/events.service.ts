import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class EventsService {
  constructor(private readonly httpService: HttpService) {}

  async updateEvent(idEvent: number, updateEventDto: UpdateEventDto){
    const updateEvent = {
      updateEventDto: UpdateEventDto,
    };
    return this.httpService
      .post(`https://www.eventbriteapi.com/v3/events/${idEvent}`, {
        headers: {
          Authorization: `Bearer ${process.env.EVENT_API_KEY}`,
          Accept: 'application / json',
        },
      })
      .pipe(map((response) => response.data));
  }

  async findAll() {
    this.httpService
      .get(`https://www.eventbriteapi.com/v3/categories/`, {
        headers: {
          Authorization: `Bearer ${process.env.EVENTBRITE_API_KEY}`,
        },
      })
      .pipe(map((response) => response.data));
  }
}
