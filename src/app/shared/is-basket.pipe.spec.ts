import { InBasketPipe } from './is-basket.pipe';

describe('InBasketPipe', () => {
  it('create an instance', () => {
    const pipe = new InBasketPipe();
    expect(pipe).toBeTruthy();
  });
});
