/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

import OpenAI from 'openai';
import { checkCompleteStatusUseCase, createMessageUseCase, createRunUseCase, createThreadUseCase, getMessageListUseCase } from './use-cases';
import { QuestionDto } from './dtos/question.dto';
import { ThreadDto } from './dtos/thread.dto';

@Injectable()
export class SamAssistantService {

private openai: OpenAI;

async loadApiKey(apiKey: string) {
  this.openai = new OpenAI({
    apiKey: apiKey,
  });
}

  async createThread(threadDto: ThreadDto) {
    const { apiKey } = threadDto;
    console.log('api key', apiKey);
    this.loadApiKey(apiKey)
    return await createThreadUseCase( this.openai );
  }

  async userQuestion( questionDto: QuestionDto ) {
    const { threadId, question, apiKey } = questionDto;

    this.loadApiKey(apiKey);

    const message = await createMessageUseCase(this.openai, { threadId, question });
    
    const run = await createRunUseCase( this.openai, { threadId } );

    await checkCompleteStatusUseCase( this.openai, { runId: run.id, threadId: threadId } );

    const messages = await getMessageListUseCase(this.openai, { threadId });

    const lastContent = messages[messages.length - 1].content;

    const messageFinal = lastContent[lastContent.length - 1]

    const response = {
      "code": 200,
      "status": "OK",
      "data": {
        "text": messageFinal
      }
    };
  
    return response;
  }


  
}
