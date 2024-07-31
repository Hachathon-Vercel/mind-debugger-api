/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

import OpenAI from 'openai';
import { checkCompleteStatusUseCase, createMessageUseCase, createRunUseCase, createThreadUseCase, getMessageListUseCase } from './use-cases';
import { QuestionDto } from './dtos/question.dto';
import fs from 'fs';
import { join } from 'path';

import * as path from 'path';

@Injectable()
export class SamAssistantService {

  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });


  async createThread() {
    return await createThreadUseCase( this.openai );
  }

  async userQuestion( questionDto: QuestionDto ) {
    const { threadId, question } = questionDto;

    /*const message = await createMessageUseCase(this.openai, { threadId, question });
    
    const run = await createRunUseCase( this.openai, { threadId } );

    await checkCompleteStatusUseCase( this.openai, { runId: run.id, threadId: threadId } );

    const messages = await getMessageListUseCase(this.openai, { threadId });

    const lastContent = messages[messages.length - 1].content;

    const messageFinal = lastContent[lastContent.length - 1]*/
    const response = {
      "code": 200,
      "status": "OK",
      "data": {
        "text": "messageFinal"
      }
    };

    
    /////

    const ELEVENLAB_ID = process.env.ELEVENLAB_ID ?? "";
    const URL = `https://api.elevenlabs.io/v1/text-to-speech/pNInz6obpgDQGcFmaJgB`;

    const header = new Headers();
    header.append("accept", "audio/mpeg");
    header.append("xi-api-key", "5a9e982e71a27ba02fdc3595a3c1a591");
    header.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "model_id": "eleven_multilingual_v2",
        "text": "Entiendo que la tristeza puede ser realmente abrumadora a veces",
        "voice_settings": {
            "similarity_boost": 0.3,
            "stability": 0.64,
            "style": 0.08,
            "use_speaker_boost": true
        }
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: raw,
    };

    const responseEleven = await fetch(URL, requestOptions);

    console.log("responseEleven: ", responseEleven);
    console.log(responseEleven.status)

    const status = responseEleven.status === 200

    const buffer = await responseEleven.arrayBuffer();

    console.log("buffer: ", buffer);
    

    const pathFile = join(process.cwd(), 'tmp', `${Date.now()}-audio.mp3`);
    console.log("pathFile: ", pathFile);

    //const folderPath = path.resolve(__dirname, 'C:\Users\camilo.ochoa\Documents\GitHub\HACKATON\mind-debugger-api\tmp');
    //const speechFile = path.resolve(`${folderPath}/${new Date().getTime()}.mp3`);
    //const pathFile = join(process.cwd(), 'tmp', `${Date.now()}-audio.mp3`);
    //console.log("pathFile: ", pathFile);

    //fs.mkdirSync(folderPath, { recursive: true });

    fs.writeFileSync(pathFile, Buffer.from(buffer));
    //console.log("Archivo de audio guardado en:", pathFile);

    //const buffer2 = Buffer.from( await buffer );
    //fs.writeFileSync( speechFile, buffer2 );

    //console.log("Archivo de audio guardado en:", speechFile);

    console.log("status: ", status);
  
    return response;
  }


  
}
