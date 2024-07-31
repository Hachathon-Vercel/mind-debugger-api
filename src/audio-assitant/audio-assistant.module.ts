import { Module } from '@nestjs/common';
import { AudioAssistantController } from './audio-assistant.controller';
import { AudioAssistantService } from './audio-assistant.service';

@Module({
  controllers: [AudioAssistantController],
  providers: [AudioAssistantService],
})
export class AudioAssistantModule {}
