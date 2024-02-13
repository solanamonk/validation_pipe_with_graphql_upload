import { Module } from '@nestjs/common';
import { UploadCountersService } from './upload-counters.service';
import { UploadCountersResolver } from './upload-counters.resolver';

@Module({
  providers: [UploadCountersService, UploadCountersResolver]
})
export class UploadCountersModule {}
