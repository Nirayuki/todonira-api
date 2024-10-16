import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Apply a global prefix to all routes

  await app.listen(3030);
}
bootstrap();


// mongodb+srv://<db_username>:<db_password>@todonira.aiy4e.mongodb.net/?retryWrites=true&w=majority&appName=todonira