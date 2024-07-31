/* eslint-disable prettier/prettier */

import { Body, Controller, Post } from "@nestjs/common";
import { AudioAssistantService } from "./audio-assistant.service";
import { AudioDto } from "./dtos/audio.dto";



@Controller('audio-assistant')
export class AudioAssistantController {

    constructor(private readonly audioAssistantService: AudioAssistantService) {}


    @Post('audio-assitant')
  async audioAssitant(
    @Body() audioDto: AudioDto
  ) {
    return await this.audioAssistantService.audioAssitant(audioDto.text);
  }

}