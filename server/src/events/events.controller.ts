import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  
  // @Get('api/list')
  // findAll(id: number) {
  //   return this.eventsService.findAll();
  // }
}
