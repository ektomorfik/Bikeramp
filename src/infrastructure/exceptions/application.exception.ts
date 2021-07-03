import { ExceptionBase } from './exception.base';
import { Exceptions } from './exception.type';

export class ApplicationException extends ExceptionBase {
  readonly name = Exceptions.applicationException;
}
