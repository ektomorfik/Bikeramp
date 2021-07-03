import { Either, left, right } from 'src/shared/common/either';
import { Failure } from 'src/shared/common/failure';
import { DistanceMeasurementUnit } from './distance-measurement-unit';

export class Distance {
  public readonly value: number;
  public readonly unit: DistanceMeasurementUnit;

  private constructor(value: number, unit: DistanceMeasurementUnit) {
    this.value = value;
    this.unit = unit;
  }

  static of(value: number): Either<Failure, Distance> {
    if (value === null || value === undefined) return left(new Failure('Distance cannot be empty'));
    if (value < 0) return left(new Failure('Distance cannot be negative'));

    const distance = new Distance(value, DistanceMeasurementUnit.KM);
    return right(distance);
  }
}
