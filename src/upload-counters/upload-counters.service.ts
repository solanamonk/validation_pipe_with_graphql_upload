import { Injectable } from '@nestjs/common';
import { FileUpload, Upload } from 'graphql-upload-ts';

export type UploadCounter = {
  count: number;
}

const uploadCounter: UploadCounter = {
  count: 0,
};

@Injectable()
export class UploadCountersService {
  getCounter(): UploadCounter {
    return uploadCounter;
  }
  async increment(upload: Promise<FileUpload>): Promise<UploadCounter> {
    const file = await upload;

    // discard
    file.createReadStream().on('data', () => {});

    uploadCounter.count++;

    return uploadCounter;
  }
}
