/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SamAssistantModule } from './sam-assistant/sam-assistant.module';
import { AudioAssistantModule } from './audio-assitant/audio-assistant.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    SamAssistantModule,
    AudioAssistantModule
  ]
})
export class AppModule {}
