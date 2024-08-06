/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

@Injectable()
export class VoiceClonerService {
  async textToSpeech(text: string): Promise<string> {
    const filePath = 'output/audio.mp3';
    //const command = `gtts-cli '${text}' --output ${filePath}`;
    const command = `python generate_speech.py "${text}" "${filePath}"`;


    try {
      await execAsync(command);
      return filePath;
    } catch (error) {
      throw new Error('Error generating speech: ' + error.message);
    }
  }
}
