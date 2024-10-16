import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules';
import { PingController } from './controllers';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://aron:familia123@todonira.aiy4e.mongodb.net/todonira-db?retryWrites=true&w=majority&appName=todonira'),
    UserModule],
  controllers: [AppController, PingController],
  providers: [AppService],
})

export class AppModule {}
