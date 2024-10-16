import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import { Model } from 'mongoose';
import { User } from 'src/types';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
    ) {}

    async getAll() {
        const result = await this.userModel.find().exec();
        return result;
    }

    async get(id: string){
        const result = await this.userModel.findById(id).exec();
        return result;
    }

    async createUser(doc: User) {
        const result = await new this.userModel(doc).save();
        return result.id;
    }
}
