import rob from '../index';

describe('DP/HouseRobber', () => {
  it(`[1,2,3,1]
    =>  4
   `, () => {
    expect(rob([1, 2, 3, 1])).toEqual(4);
  });

  it(`[2,7,9,3,1]
  =>  12
 `, () => {
    expect(rob([2, 7, 9, 3, 1])).toEqual(12);
  });
});
