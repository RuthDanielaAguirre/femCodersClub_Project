import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post('update/event')
  updateEvent(@Param('idEvent') idEvent: number, @Body() event: UpdateEventDto) {
    return this.eventsService.updateEvent(idEvent, event)
  }
  
  @Get('api/list')
  findAll(id: number) {
    return this.eventsService.findAll();
  }
}
