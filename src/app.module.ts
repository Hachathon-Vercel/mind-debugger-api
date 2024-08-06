/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SamAssistantModule } from './sam-assistant/sam-assistant.module';
import { AudioAssistantModule } from './audio-assitant/audio-assistant.module';
import { CloneVoiceModule } from './clone/clone-voice.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    SamAssistantModule,
    AudioAssistantModule,
    CloneVoiceModule

  ]
})
export class AppModule {}
