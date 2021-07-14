import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {User,UserSchema} from "./models/user.entity";

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://root:root@cluster0.ajmv9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"),
    MongooseModule.forFeature([{name:User.name, schema:UserSchema}]),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
