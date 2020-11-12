import { zeroPadding } from '../src';

describe('zeroPadding', () => {
  it('works', () => {
    expect(zeroPadding('41')).toEqual('0041');
  });
});
