/* eslint-disable prettier/prettier */

import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { AudioAssistantService } from "./audio-assistant.service";
import { AudioDto } from "./dtos/audio.dto";
import type { Response } from 'express';



@Controller('audio-assistant')
export class AudioAssistantController {

    constructor(private readonly audioAssistantService: AudioAssistantService) {}


    @Post('audio-assitant')
  async audioAssitant(
    @Body() audioDto: AudioDto,
    @Res() res: Response
  ) {
    

    const filePath = await this.audioAssistantService.audioAssitant(audioDto.text);
    res.setHeader('Content-Type', 'audio/mp3');
    res.status(HttpStatus.OK);
    res.sendFile(filePath);
  }

}