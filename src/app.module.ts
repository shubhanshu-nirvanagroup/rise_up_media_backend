import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsModule } from './events/events.module';
import {GraphQLModule} from "@nestjs/graphql"
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/riseUpMedia'),
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),  
  EventsModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
