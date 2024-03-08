import { Controller, Get, Param, Query } from "@nestjs/common";
import { EventsService } from "./events.service";
import { Event } from "./interfaces/event.interface";

@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Get()
    async findAll(): Promise<Event[]> {
      return this.eventsService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<Event> {
      return this.eventsService.findById(id)
    }
}