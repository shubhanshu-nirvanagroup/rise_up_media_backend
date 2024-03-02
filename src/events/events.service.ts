import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Event } from "./interfaces/event.interface";
import { Model } from "mongoose";


@Injectable()
export class EventsService {
    
    constructor(@InjectModel('Event') private readonly eventModel: Model<Event>) {}

    async findAll():Promise<Event[]>{
        return this.eventModel.find().exec();
    }
}