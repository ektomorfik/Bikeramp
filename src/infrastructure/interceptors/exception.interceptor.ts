import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  BadRequestException as NestBadRequestException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApplicationException } from '../exceptions/application.exception';
import { ExceptionBase } from '../exceptions/exception.base';

export class ExceptionInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler): Observable<ExceptionBase> {
    return next.handle().pipe(
      catchError((err) => {
        if (err instanceof ApplicationException) {
          throw new NestBadRequestException(err.message);
        }

        return throwError(err);
      }),
    );
  }
}
