import { Field, InputType } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload-ts';
import { HasMimetype } from 'src/validators/has-mimetype.validator';

@InputType()
export class IncrementUploadCounterInput {
  @Field(() => GraphQLUpload, { nullable: true })
  @HasMimetype(['text/plain'])
  file: Promise<FileUpload>;

  @Field(() => GraphQLUpload, { nullable: true })
  @HasMimetype(['text/plain'])
  file2: Promise<FileUpload>;
}
