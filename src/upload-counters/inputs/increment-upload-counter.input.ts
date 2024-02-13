import { Field, InputType } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload-ts';
import { HasMimetype } from 'src/validators/has-mimetype.validator';

@InputType()
export class IncrementUploadCounterInput {
  @Field(() => GraphQLUpload)
  @HasMimetype(['text/plain'])
  file: Promise<FileUpload>;
}
