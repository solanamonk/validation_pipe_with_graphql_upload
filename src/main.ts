import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { graphqlUploadExpress } from 'graphql-upload-ts';
import { ValidationPipe } from '@nestjs/common';
import { MyValidationPipe } from './pipes/my-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalPipes(new ValidationPipe()); // hangs
  app.useGlobalPipes(new MyValidationPipe());
  app.use(graphqlUploadExpress());

  await app.listen(3000);
}
bootstrap();
