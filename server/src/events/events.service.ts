import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {

  constructor(
    @InjectRepository(Event) private readonly eventRepository: Repository<Event>
  ){}

  findOne(idEvent: number): Promise<Event>{
    return this.eventRepository.findOneBy({ idEvent });
  }

  create(event: CreateEventDto) {
    return this.eventRepository.save(this.eventRepository.create(event));
  }

  async update(idEvent: number, event: UpdateEventDto) {
    const updateEvent = await this.eventRepository.update(idEvent, event)
    if(updateEvent) return {message: 'Actualización realizada correctamente'};
  }
  
  async removeEvent(idEvent: number) {
    const deleteEvent = await this.eventRepository.delete(idEvent)
    if(deleteEvent) return {message: 'Evento borrado correctamente'};
  }

  // findAll() {
  //   return `This action returns all events`;
  // }
}
