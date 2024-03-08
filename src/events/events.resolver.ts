import { Args, Query, Resolver } from "@nestjs/graphql";
import { EventsService } from "./events.service";
import { Event } from "./schemas/event.schemas";


@Resolver(of => Event)
export class EventsResolver {
    constructor(private readonly eventsService: EventsService) {}

    @Query(returns => [Event])
    events(): Promise<Event[]>{
        return this.eventsService.findAll();
    }

    @Query(returns => Event)
    eventById(@Args('id') id: number): Promise<Event>{
        return this.eventsService.findById(id);
    }
}