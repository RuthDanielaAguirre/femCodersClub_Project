import { Injectable } from '@nestjs/common';
import { CreateVolunteerDto } from './dto/create-volunteer.dto';
import { UpdateVolunteerDto } from './dto/update-volunteer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Volunteer } from './entities/volunteer.entity';

@Injectable()
export class VolunteerService {

  constructor(
    @InjectRepository(Volunteer)
    private readonly volunteerRepository: Repository<Volunteer>
  ){}

   async create(createVolunteerDto: CreateVolunteerDto) {
    return await this.volunteerRepository.save(this.volunteerRepository.create(createVolunteerDto));
  }

  async findVolunteers() {
   return this.volunteerRepository.find({})
  
  }

  async findVolunteer(id: number): Promise<Volunteer> {
    return this.volunteerRepository.findOne({ where: { id } } as any);
}

  update(id: number, updateVolunteerDto: UpdateVolunteerDto) {
    return JSON.stringify(updateVolunteerDto);
  }

  remove(id: number) {
    return `volunteer with ${id} has been removed`;
  }
}
