/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { SamAssistantService } from './sam-assistant.service';
import { QuestionDto } from './dtos/question.dto';
import { ThreadDto } from './dtos/thread.dto';

@Controller('sam-assistant')
export class SamAssistantController {
  
  constructor(private readonly samAssistantService: SamAssistantService) {}


  @Post('create-thread')
  async createThread(
    @Body() threadDto: ThreadDto
  ) {
    return await this.samAssistantService.createThread(threadDto);
  }

  @Post('user-question')
  async userQuestion(
    @Body() questionDto: QuestionDto
  ) {
    return await this.samAssistantService.userQuestion(questionDto);
  }






}
