import { Trip } from '../trip';
import { Uuid } from '../Uuid';

it('Does not allow to create a trip without an id', () => {
  const result = Trip.of(undefined as any, 10, 10, new Date());
  expect(result.isRight()).toBeFalsy();
});

it('Does not allow to create a trip without a date', () => {
  const result = Trip.of(Uuid.new(), 10, 10, undefined as any);
  expect(result.isRight()).toBeFalsy();
});

it('Allows to create valid trip', () => {
  const result = Trip.of(Uuid.new(), 10, 10, new Date());
  expect(result.isRight()).toBeTruthy();
});
