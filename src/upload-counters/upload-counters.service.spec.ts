import { Test, TestingModule } from '@nestjs/testing';
import { UploadCountersService } from './upload-counters.service';

describe('UploadCountersService', () => {
  let service: UploadCountersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadCountersService],
    }).compile();

    service = module.get<UploadCountersService>(UploadCountersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
