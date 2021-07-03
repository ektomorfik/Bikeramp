import { Distance } from '../distance';

it('Should not allow to create empty distance', () => {
  const result = Distance.of(undefined as any);
  expect(result.isRight()).toBeFalsy();
});

it('Should not allow to create negative distance', () => {
  const result = Distance.of(-10);
  expect(result.isRight()).toBeFalsy();
});

it('Allows to create valid distance', () => {
  const result = Distance.of(100);
  expect(result.isRight()).toBeTruthy();
});
