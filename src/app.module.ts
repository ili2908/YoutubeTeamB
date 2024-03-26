import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataExtractionModule } from './modules/data-extraction/data-extraction.module';
import { DatabaseModule } from './db/database.module';
import { AudioTranscriptionModule } from './modules/audio-transcription/audio-transcription.module';

@Module({
  imports: [
    DatabaseModule,
    DataExtractionModule,
    AudioTranscriptionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
