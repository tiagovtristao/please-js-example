import {product} from './Button';

test('multiplies 3 by 5', () => {
  const a: number = 3;

  expect(product(a, 5)).toBe(15);
});
