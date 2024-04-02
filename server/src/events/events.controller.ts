import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EventbriteService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventbriteService: EventbriteService) {}

  @Post('create/event')
  create(@Body() createEventDto: CreateEventDto) {
    console.log(createEventDto);

    return this.eventbriteService.createEvent(createEventDto);
  }

  @Post('update/event/:idEvent')
  updateEvent(
    @Param('idEvent') idEvent: number,
    @Body() event: UpdateEventDto,
  ) {
    console.log('prueba de si está entrando esta función o no');
    return this.eventbriteService.updateEvent(idEvent, event);
  }

  @Get('api/list')
  findAll() {
    console.log('está entrando esta función?');
    return this.eventbriteService.findAll();
  }

  @Get('api/list/past')
  findAllPastEvents() {
    return this.eventbriteService.findAllPastEvents();
  }

  @Get('api/list/upcoming')
  findAllUpcomingEvents() {
    return this.eventbriteService.findAllUpcomingEvents();
  }
}
