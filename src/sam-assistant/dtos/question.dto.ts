/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';


export class QuestionDto {

  @IsString()
  readonly threadId: string;

  @IsString()
  readonly question: string;

  @IsString()
  readonly apiKey: string;


}