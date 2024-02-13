import { Test, TestingModule } from '@nestjs/testing';
import { UploadCountersResolver } from './upload-counters.resolver';

describe('UploadCountersResolver', () => {
  let resolver: UploadCountersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadCountersResolver],
    }).compile();

    resolver = module.get<UploadCountersResolver>(UploadCountersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
