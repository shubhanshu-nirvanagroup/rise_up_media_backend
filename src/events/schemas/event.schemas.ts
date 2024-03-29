import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Event extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
