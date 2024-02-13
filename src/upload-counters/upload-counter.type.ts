import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UploadCounterType {
  @Field(() => Int)
  count: number;
}
