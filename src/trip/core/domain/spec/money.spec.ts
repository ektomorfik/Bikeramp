import { Money } from '../money';

it('Should not allow to create empty money', () => {
  const result = Money.of(undefined as any);
  expect(result.isRight()).toBeFalsy();
});

it('Should not allow to create negative money', () => {
  const result = Money.of(-10);
  expect(result.isRight()).toBeFalsy();
});

it('Allows to create valid money', () => {
  const result = Money.of(100);
  expect(result.isRight()).toBeTruthy();
});
