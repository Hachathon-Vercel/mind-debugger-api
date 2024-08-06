import { Controller, Post, Body } from '@nestjs/common';
import { VoiceClonerService } from './clone-voice.service';


@Controller('voice-cloner')
export class VoiceClonerController {
  constructor(private readonly voiceClonerService: VoiceClonerService) {}

  @Post('convert')
  async convertTextToAudio(@Body('text') text: string): Promise<string> {
    const filePath = await this.voiceClonerService.textToSpeech(text);
    return `Audio file saved at ${filePath}`;
  }
}
