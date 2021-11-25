import { StatusCodes } from 'http-status-codes';
import { CustomError } from './CustomError';

export class InvalidDataError extends CustomError {
  statusCode = StatusCodes.BAD_REQUEST;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, InvalidDataError.prototype);
  }

  serializeErrors() {
    return [{ status: this.statusCode, message: this.message }];
  }
}
