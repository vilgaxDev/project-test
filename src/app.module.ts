// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService], // Add AppService to providers array
})
export class AppModule {}
