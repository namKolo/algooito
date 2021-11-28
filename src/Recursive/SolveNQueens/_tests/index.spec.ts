import solveNQueens from '../index';

describe('Recursive/SolveNQueens', () => {
  it(`N = 1
    =>  [["Q"]]
   `, () => {
    expect(solveNQueens(1)).toEqual([['Q']]);
  });
  it(`N = 4
  => 
  ['.Q..', '...Q', 'Q...', '..Q.'],
  ['..Q.', 'Q...', '...Q', '.Q..'],
  `, () => {
    expect(solveNQueens(4)).toEqual([
      ['.Q..', '...Q', 'Q...', '..Q.'],
      ['..Q.', 'Q...', '...Q', '.Q..'],
    ]);
  });
});
