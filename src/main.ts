import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ // permite apenas que os campos definidos no DTO sejam enviados
    whitelist: true, // remove campos que não estão definidos no DTO
    forbidNonWhitelisted: true, // retorna um erro caso um campo não definido no DTO seja enviado 400
  }));
  await app.listen(process.env.PORT ?? 3049);
}
bootstrap();
