import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Req } from '@nestjs/common';
import { VolunteerService } from './volunteer.service';
import { CreateVolunteerDto } from './dto/create-volunteer.dto';
import { UpdateVolunteerDto } from './dto/update-volunteer.dto';
import { Volunteer } from './entities/volunteer.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Volunteer')
@Controller('volunteer')
export class VolunteerController {
  constructor(private readonly volunteerService: VolunteerService) {}

  @Post()
  @ApiOperation({summary:'It creates a volunteer'})
  @ApiResponse({status: 201,description:'A Volunteer has been succesfully created'})
  create(@Body() createVolunteerDto: CreateVolunteerDto) {
    return this.volunteerService.create(createVolunteerDto);
  }

  @Get()
  findAll() {
    return this.volunteerService.findVolunteers();
  }
  @Get(':id')
  findOneById(@Param('id') idVolunteer:number){
  return this.volunteerService.findOneById(idVolunteer);
  }

  @Put(':idVolunteer')
  update(@Param('idVolunteer') idVolunteer: number, @Body() updateVolunteerDto: UpdateVolunteerDto) {
    return this.volunteerService.update(+idVolunteer, updateVolunteerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.volunteerService.remove(id);
  }
}
