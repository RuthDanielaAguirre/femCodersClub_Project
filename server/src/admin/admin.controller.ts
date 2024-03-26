import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateSponsorDto } from 'src/sponsor/dto/create-sponsor.dto';
import { ModifySponsorDto } from 'src/sponsor/dto/modify-sponsor.dto';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Post()
    addSponsor( @Body() addSponsor: CreateSponsorDto ){
        return this.adminService.addSponsor(addSponsor);
    }

    @Put(':sponsor_Id')
    editSponsor(@Param('sponsor_Id') sponsor_Id: number, @Body() editSponsor: ModifySponsorDto){
        return this.adminService.editSponsor(sponsor_Id, editSponsor);
    }

    @Delete('/:sponsorId')
    deleteSponsor(@Param('sponsorId') sponsor_Id: number) {
        return this.adminService.deleteSponsor(sponsor_Id);    
    }
}
