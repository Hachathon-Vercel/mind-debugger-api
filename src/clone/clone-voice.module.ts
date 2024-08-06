import { Module } from '@nestjs/common';
import { VoiceClonerService } from './clone-voice.service';
import { VoiceClonerController } from './clone-voice.controller';

@Module({
  controllers: [VoiceClonerController],
  providers: [VoiceClonerService],
})
export class CloneVoiceModule {}
