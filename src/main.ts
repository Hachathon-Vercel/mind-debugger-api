/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

import * as fs from 'fs';

async function bootstrap() {

  const httpsOptions = {
    key: fs.readFileSync('./src/cert/key.pem'),
    cert: fs.readFileSync('./src/cert/cert.pem'),
  };


  const app = await NestFactory.create(
    AppModule, 
    //{ httpsOptions },
  );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
    
  );

  app.enableCors();


  //app.use( bodyParser.json({ limit: '10mb' }) );
  //app.use( bodyParser.urlencoded({ limit: '10mb', extended: true }) );
  


  await app.listen(3000);
}
bootstrap();
