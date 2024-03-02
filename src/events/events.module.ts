import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { EventSchema } from "./schemas/event.schemas";
import { EventsController } from "./events.controller";
import { EventsService } from "./events.service";
import { EventsResolver } from "./events.resolver";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Event', schema: EventSchema}])],
    controllers: [EventsController],
    providers: [EventsService,EventsResolver],
})

export class EventsModule {}