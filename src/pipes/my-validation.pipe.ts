import { ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';

export class MyValidationPipe extends ValidationPipe {
  public createExceptionFactory() {
    return (validationErrors: ValidationError[] = []) => {
      // HACK: graphql-upload-ts does not close streams on exceptions, see
      // https://github.com/meabed/graphql-upload-ts/issues/78
      const traverseAndCloseStreams = async (obj: any) => {
        for (const key in obj) {
          if (obj[key] instanceof Promise) {
            const file = await obj[key];

            if (file.createReadStream) {
              const stream = file.createReadStream();

              stream.on('data', () => {});

              delete file.createReadStream;
            }
          } else if (typeof obj[key] === 'object') {
            traverseAndCloseStreams(obj[key]);
          }
        }
      }

      traverseAndCloseStreams(validationErrors);

      return super.createExceptionFactory()(validationErrors);
    };
  }
}
