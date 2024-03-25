import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Faq } from './entities/faq.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class FaqService {
  constructor(
    @InjectRepository(Faq) 
    private readonly faqRepository: Repository<Faq>,
  ){}
  async create(createFaqDto: CreateFaqDto) {
    const faq = this.faqRepository.create(createFaqDto);
    await this.faqRepository.save(faq);
    return "La Pregunta frecuente fue agregada exitosamente";
  }

async findAll() {
    return await this.faqRepository.find();
  }

  async findOne(idFaq: number) {
    const faq = await this.faqRepository.findOne({ where: { idFaq } } as FindOneOptions<Faq>);
    if (!faq) {
      throw new NotFoundException(`La pregunta frecuente ${idFaq} no existe`);
    }
    return faq;
  }
  
  async update(idFaq: number, updateFaqDto: UpdateFaqDto) {
    const faq = await this.findOne(idFaq);
    await this.faqRepository.save(faq);
    return "La pregunta frecuente fue actualizada";
  }

  async remove(idFaq: number) {
    const faq = await this.findOne(idFaq);
    await this.faqRepository.remove(faq);
    return "Pregunta frecuente eliminada exitosamente";
  }
}
