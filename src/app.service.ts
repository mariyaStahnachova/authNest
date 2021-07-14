import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt'
import uuid from 'uuid'

import {User, UserDocument} from './models/user.entity'
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class AppService {
  constructor(
      @InjectModel(User.name) private UserModel: Model<UserDocument>,) {
  }
  getHello(): string {
    return 'Hello World!';
  }

   async registration({email,password}): Promise<any> {
     const user= await this.UserModel.findOne({email:email}).exec()
    if(user){
      return 'Email already exist'
    }
    const hashedPassword =await bcrypt.hash(password,3)
       const activationLink  = uuid.v4()
    return this.UserModel.create({email,password:hashedPassword, activationLink})
  }
  login(): string {
    return 'login';
  }
  logout(): string {
    return 'logout';
  }
  refresh(): string {
    return 'refresh';
  }
  activate(): string {
    return 'Hello World!';
  }


}
