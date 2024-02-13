import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { FileUpload } from 'graphql-upload-ts';

export function HasMimetype(mimetypes: string[], validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'hasMimetype',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return !value || value.then((file: FileUpload) => mimetypes.includes(file.mimetype));
        },
        defaultMessage(args: ValidationArguments) {
          return `${propertyName} is not one of allowed mimetypes: ${mimetypes.join(', ')}`;
        },
      },
    });
  };
}
