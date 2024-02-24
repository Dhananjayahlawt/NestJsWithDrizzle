import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: '*' });
  app.setGlobalPrefix('v1');

  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());

  // Swagger Configuration
  const options = new DocumentBuilder()
    .setTitle('Antria Nest API')
    .setDescription('Antria Nest API Description ')
    .setVersion('1.0')
    .addTag('')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(configService.get('app.port'));
}
bootstrap();
