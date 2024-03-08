import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EventDocument = HydratedDocument<Event>;

@Schema()
@ObjectType()
export class Event {

  @Field()
  @Prop()
  id:number;

  @Field()
  @Prop()
  title: string;

  @Field()
  @Prop()
  description: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);