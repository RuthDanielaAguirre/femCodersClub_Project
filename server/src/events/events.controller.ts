import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }

  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Put(':eventId')
  update(@Param('eventId') idEvent: number, @Body() event: UpdateEventDto) {
    return this.eventsService.update(idEvent, event);
  }
  
  @Delete(':eventId')
  removeEvent(@Param('eventId') eventId: number) {
    return this.eventsService.removeEvent(eventId);
  }
  
  // @Get()
  // findAll() {
  //   return this.eventsService.findAll();
  // }
}
