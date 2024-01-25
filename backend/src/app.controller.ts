import { Body, Controller, Get, Ip, Post } from '@nestjs/common';
import { infoResponseI } from './app.types';
import { CommunicationTypes } from './entities/CommunicationTypes.entity';
import { Repository } from 'typeorm';
import { Professions } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { SuggestedImprovementDTO } from './dto/SuggestedImprovement.dto';
import { SuggestedProfessionDTO } from './dto/SuggestedProfession.dto';
import { SuggestedImprovement } from './entities/suggestedImprovement.entity';
import { SuggestedProfession } from './entities/suggestedProfession';
import { instanceToPlain } from 'class-transformer';

@Controller()
export class AppController {
  constructor(
    @InjectRepository(CommunicationTypes)
    private communicationTypes: Repository<CommunicationTypes>,
    @InjectRepository(Professions)
    private professions: Repository<Professions>,

    @InjectRepository(SuggestedImprovement)
    private suggestedImprovement: Repository<SuggestedImprovement>,
    @InjectRepository(SuggestedProfession)
    private suggestedProfession: Repository<SuggestedProfession>,
  ) {}

  @Get('/')
  info(): infoResponseI {
    return {
      version: 0.1,
      descriptoion: `'${process.env.PROJECT_NAME}' project providing posibility connect Teachers(Coaches) and Students each other in World Wide Web`,
    };
  }

  @Get('/professions')
  async professionsList() {
    return await this.professions.find();
  }

  @Get('/communicationTypes')
  async communicationTypesList() {
    return await this.communicationTypes.find();
  }

  @Post('/suggest-improvement')
  async suggestProfement(@Ip() ip, @Body() body: SuggestedImprovementDTO) {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const entities = await this.suggestedImprovement
      .createQueryBuilder('entity')
      .where('entity.createdDate < :oneWeekAgo', { oneWeekAgo })
      .andWhere('entity.ipAddress = :ipAddress', { ip })
      .getMany();

    if (!entities.length) {
      const suggestedImprovement = this.suggestedImprovement.create(
        instanceToPlain(body),
      );

      await this.suggestedImprovement.save(suggestedImprovement);
    }

    return true;
  }
  @Post('/suggest-profession')
  async suggestProfession(@Ip() ip, @Body() body: SuggestedProfessionDTO) {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const entities = await this.suggestedImprovement
      .createQueryBuilder('entity')
      .where('entity.createdDate < :oneWeekAgo', { oneWeekAgo })
      .andWhere('entity.ipAddress = :ipAddress', { ip })
      .getMany();

    if (!entities.length) {
      const suggestedProfession = this.suggestedProfession.create(
        instanceToPlain(body),
      );

      await this.suggestedImprovement.save(suggestedProfession);
    }

    return null;
  }
}
