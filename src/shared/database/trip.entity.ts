import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('trip')
export class TripEntity {
  @PrimaryColumn('uuid')
  id!: string;

  @Column()
  distance!: number;

  @Column()
  distanceMeasurementUnit!: string;

  @Column()
  netPrice!: number;

  @Column()
  currencyCode!: string;

  @Column()
  dateUtc!: Date;

  private constructor() {
    //
  }

  static of(
    id: string,
    distance: number,
    distanceMeasurementUnit: string,
    netPrice: number,
    currencyCode: string,
    dateUtc: Date,
  ): TripEntity {
    const entity = new TripEntity();
    entity.id = id;
    entity.distance = distance;
    entity.distanceMeasurementUnit = distanceMeasurementUnit;
    entity.netPrice = netPrice;
    entity.currencyCode = currencyCode;
    entity.dateUtc = dateUtc;
    return entity;
  }
}
