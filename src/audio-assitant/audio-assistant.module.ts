import { Module } from '@nestjs/common';
import { AudioAssistantService } from './audio-assistant.service';
import { AudioAssistantController } from './audio-assistant.controller';

@Module({
  controllers: [AudioAssistantController],
  providers: [AudioAssistantService],
})
export class AudioAssistantModule {}
