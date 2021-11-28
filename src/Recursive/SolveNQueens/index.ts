type Position = {
  x: number;
  y: number;
};

type Output = Array<Array<string>>;
type QueenPositions = Position[];
type PositionHash = Map<number, boolean>;

const convertPoint2DInto1D = (pos: Position, size: number): number =>
  pos.x * size + pos.y;

const isValidQueenPosition = (
  pos: Position,
  trackPositions: QueenPositions
) => {
  // Cannot be in the same row
  const existedRow = !!trackPositions.find(({ x }) => x === pos.x);
  if (existedRow) return false;

  // Cannot be in the same col
  const existedCol = !!trackPositions.find(({ y }) => y === pos.y);
  if (existedCol) return false;

  // cannot be in the same diagonal line
  const existedDiagonal = !!trackPositions.find(
    ({ x, y }) => Math.abs(x - pos.x) === Math.abs(y - pos.y)
  );
  if (existedDiagonal) return false;

  return true;
};

const tryToPutQueens = (size: number) => {
  const solve = (
    row: number,
    trackPositions: QueenPositions,
    solutions: QueenPositions[]
  ) => {
    if (trackPositions.length === size) {
      solutions.push([...trackPositions]);
      return;
    }

    for (let col = 0; col < size; col++) {
      const nextPos = { x: row, y: col };
      if (isValidQueenPosition(nextPos, trackPositions)) {
        trackPositions.push(nextPos);
        solve(row + 1, trackPositions, solutions);
        trackPositions.pop();
      }
    }
  };

  return solve;
};

const solveNQueens = function(n: number): Output {
  let trackPositions: QueenPositions = [];
  let solutions: QueenPositions[] = [];
  const traverse = tryToPutQueens(n);

  // Traverse all solutions from the first row
  traverse(0, trackPositions, solutions);

  // Transform
  const transformSolutionToOutput = (queenPositions: QueenPositions) => {
    const initialValue: PositionHash = new Map();
    const positionHash = queenPositions.reduce((hash, pos) => {
      hash.set(convertPoint2DInto1D(pos, n), true);
      return hash;
    }, initialValue);

    return Array.from({ length: n }, (_, x) => {
      const s = Array.from({ length: n }, (_, y) => {
        const point = convertPoint2DInto1D({ x, y }, n);
        return positionHash.get(point) ? 'Q' : '.';
      });
      return s.join('');
    });
  };

  return solutions.map(transformSolutionToOutput);
};

export default solveNQueens;
