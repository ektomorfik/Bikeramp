import { Either, left, right } from 'src/shared/common/either';
import { Failure } from 'src/shared/common/failure';
import { CurrencyCode } from './currency-code';

export class Money {
  public readonly value: number;
  public readonly currencyCode: CurrencyCode;

  private constructor(value: number, currencyCode: CurrencyCode) {
    this.value = value;
    this.currencyCode = currencyCode;
  }

  static of(value: number): Either<Failure, Money> {
    if (value === null || value === undefined) return left(new Failure('Money cannot be empty'));
    if (value < 0) return left(new Failure('Money cannot be a negative number'));

    const money = new Money(+value.toFixed(2), CurrencyCode.PLN);
    return right(money);
  }
}
