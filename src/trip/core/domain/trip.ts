import { Either, left, right } from 'src/shared/common/either';
import { Failure } from 'src/shared/common/failure';
import { Distance } from './distance';
import { Money } from './money';
import { Uuid } from './Uuid';

export class Trip {
  public get id(): Uuid {
    return this._id;
  }
  private _id: Uuid;

  public get distance(): Distance {
    return this._distance;
  }
  private _distance: Distance;

  public get netPrice(): Money {
    return this._netPrice;
  }
  private _netPrice: Money;

  public get date(): Date {
    return this._date;
  }
  private _date: Date;

  private constructor(id: Uuid, distance: Distance, netPrice: Money, date: Date) {
    this._id = id;
    this._distance = distance;
    this._netPrice = netPrice;
    this._date = date;
  }

  static of(id: Uuid, distance: Distance, netPrice: Money, date: Date): Either<Failure, Trip> {
    if (!id) return left(new Failure('Cannot create a trip without an id'));

    if (!(date instanceof Date))
      return left(new Failure('Cannot create a trip with an invalid date'));

    const trip = new Trip(id, distance, netPrice, date);
    return right(trip);
  }
}
