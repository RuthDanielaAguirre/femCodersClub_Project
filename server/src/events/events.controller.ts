import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventbriteService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventbriteService: EventbriteService) {}

  @Post('create/event')
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventbriteService.createEvent(createEventDto);
  }

  @Post('update/event')
  updateEvent(@Param('idEvent') idEvent: number, @Body() event: UpdateEventDto) {
    return this.eventbriteService.updateEvent(idEvent, event)
  }
}

//   @Get('api/list')
//   findAll() {
//     return this.eventbriteService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.eventbriteService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
//     return this.eventbriteService.update(+id, updateEventDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.eventbriteService.remove(+id);
//   }
// }
