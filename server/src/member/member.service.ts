import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member) 
    private readonly memberRepository: Repository<Member>,
  ){}
  async create(createMemberDto: CreateMemberDto) {
    await this.memberRepository.save(createMemberDto);
    return '¡Nueva integrante en el equipo!';
  }

  async findAll() {
    return await this.memberRepository.find();
  }

  async findOne(idMember: number) {
    const member = await this.memberRepository.findOneBy({idMember});
    if (!member) {
      throw new NotFoundException(`La integrante ${idMember} no existe`);
    }
    return member;
  }

  async update(idMember: number, updateMemberDto: UpdateMemberDto) {
    await this.findOne(idMember);
    await this.memberRepository.save(updateMemberDto)
    return `La información de la integrante ${idMember} fue actualizada`;
  }

  async remove(idMember: number) {
    const member = await this.findOne(idMember);
    await this.memberRepository.remove(member);
    return "Integrante eliminada exitosamente";
  }
}
