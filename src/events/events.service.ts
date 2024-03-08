import { Injectable,NotFoundException  } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Event } from "./interfaces/event.interface";
import { Model,ObjectId } from "mongoose";



@Injectable()
export class EventsService {
    
    constructor(@InjectModel('Event') private readonly eventModel: Model<Event>) {}

    async findAll():Promise<Event[]>{
        return this.eventModel.find().exec();
    }

    async findById(id: number): Promise<Event> {
        const event = await this.eventModel.findOne({id}).exec();
        if (!event) {
            throw new NotFoundException(`Event with id ${id} not found`);
        }
        return event;
    }
    

}