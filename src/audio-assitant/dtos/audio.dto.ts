/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';


export class AudioDto {

  @IsString()
  readonly text: string;


}