import { Query, Resolver } from "@nestjs/graphql";
import { EventsService } from "./events.service";
import { Event } from "./schemas/event.schemas";


@Resolver(of => Event)
export class EventsResolver {
    constructor(private eventsService: EventsService) {}

    @Query(returns => [Event])
    findAll(): Promise<Event[]>{
        return this.eventsService.findAll();
    }
}