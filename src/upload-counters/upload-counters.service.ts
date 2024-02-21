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
  async increment(upload: Promise<FileUpload>, upload2: Promise<FileUpload>): Promise<UploadCounter> {
    const file = await upload;
    const file2 = await upload2;

    // discard
    if (file) file.createReadStream().on('data', () => {});
    if (file2) file2.createReadStream().on('data', () => {});

    uploadCounter.count++;

    return uploadCounter;
  }
}
