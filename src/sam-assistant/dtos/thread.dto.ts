/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';


export class ThreadDto {


  @IsString()
  readonly apiKey: string;


}