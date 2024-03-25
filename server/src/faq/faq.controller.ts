import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FaqService } from './faq.service';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';

@Controller('faq')
export class FaqController {
  constructor(private readonly faqService: FaqService) {}

  @Post()
  create(@Body() createFaqDto: CreateFaqDto) {
    return this.faqService.create(createFaqDto);
  }

  @Get()
  findAll() {
    return this.faqService.findAll();
  }

  @Get(':idFaq')
  findOne(@Param('idFaq') idFaq: number) {
    return this.faqService.findOne(idFaq);
  }

  @Patch(':idFaq')
  update(@Param('idFaq') idFaq: number, @Body() partialUpdateFaqDto: Partial<UpdateFaqDto>) {
    return this.faqService.update(idFaq, partialUpdateFaqDto);
  }

  @Delete(':idFaq')
  remove(@Param('idFaq') idFaq: number) {
    return this.faqService.remove(idFaq);
  }
}
