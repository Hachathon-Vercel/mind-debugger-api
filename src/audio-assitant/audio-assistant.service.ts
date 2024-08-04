/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

import * as fs from 'fs';
import { join } from 'path';

import * as path from 'path';

@Injectable()
export class AudioAssistantService {


  async audioAssitant(text: string) {
    const ELEVENLAB_ID = process.env.ELEVENLAB_ID ?? "";
    const URL = `https://api.elevenlabs.io/v1/text-to-speech/${process.env.VOICE}`;

    const header = new Headers();
    header.append("accept", "audio/mpeg");
    header.append("xi-api-key", `${process.env.ASSISTANT}`);
    header.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "model_id": "eleven_multilingual_v2",
      "text": text,
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

    const status = responseEleven.status === 200

    const buffer = await responseEleven.arrayBuffer();

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


    return pathFile;
  }



}
