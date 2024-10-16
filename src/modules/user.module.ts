import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from 'src/controllers';
import { UserSchema } from 'src/schemas';
import { UserService } from 'src/services';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'User',
      schema: UserSchema,
    }])
  ], // Make UserService available to other modules
  controllers: [UserController],
  providers: [UserService],
})

export class UserModule {}
