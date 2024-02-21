import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UploadCounter, UploadCountersService } from './upload-counters.service';
import { UploadCounterType } from './upload-counter.type';
import { Query } from '@nestjs/graphql';
import { IncrementUploadCounterInput } from './inputs/increment-upload-counter.input';

@Resolver(() => UploadCounterType)
export class UploadCountersResolver {
  constructor(
    private uploadCountersService: UploadCountersService,
  ) {}

  @Query(() => UploadCounterType)
  uploadCounter(): UploadCounter {
    return this.uploadCountersService.getCounter();
  }

  @Mutation(() => UploadCounterType)
  async incrementUploadCounter(
    @Args('incrementUploadCounter') incrementUploadCounterInput: IncrementUploadCounterInput,
  ): Promise<UploadCounter> {
    return this.uploadCountersService.increment(incrementUploadCounterInput.file, incrementUploadCounterInput.file2);
  }
}
