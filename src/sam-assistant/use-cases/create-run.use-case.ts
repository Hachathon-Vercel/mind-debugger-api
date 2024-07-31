/* eslint-disable prettier/prettier */
import OpenAI from 'openai';


interface Options {
  threadId: string;
  assistantId?: string;
}



export const createRunUseCase = async( openai: OpenAI, options: Options ) => {

  //const assistant = process.env.ASSISTANT ?? 'asst_o6eQPMF4jRbWQ8QQMx0Mddi3';
  const assistant = 'asst_o6eQPMF4jRbWQ8QQMx0Mddi3';

  const { threadId, assistantId = assistant } = options;

  const run = await openai.beta.threads.runs.create( threadId, {
    assistant_id: assistantId,
    // instructions; // OJO! Sobre escribe el asistente
  });

  console.log({run});

  return run;

}