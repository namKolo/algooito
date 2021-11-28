## SOlVE N Queens

- Put N queens into a board (NxN) - N queens cannot attack each other.
- List out all solutions

Keyword: "All" solutions -> not an optimal solution (MAX/MIN/LONGEST/SHORTEST) -> Recursive
Condition: N queens cannot attack each other. -> Recursive with conditions

### Thinking Process:

- We will haves N queens
- Put q[0] at (0,0) -> trackedPos[0] = {x: 0, y: 0}
- Then try to put q[1] at (1, 1) (we cannot put the same Q in the same row or same col)
- But (1,1) and (0,0) shares the same diagonal direction -> wrong
- Try (1,2) -> OK -> trackPos[1] = {x: 1, y: 2}
  -> Then we process the q[2] with the same process
  -> abstract it

```
tryToPutQueens(row, trackedPositions, solutions) {
    // we can put all N queens -> we done
    if (trackedPositions.length === N) {
        solutions.push([...trackedPos])
    }

    for (let col = 0; col < n; col++) {
      if (isValidQueenPos(row, col, trackedPositions)) {
        trackedPositions.push({ x: row, y: col });
        solve(row + 1, trackedPositions, solutions);

        // after done, we will backward - and try to put the q[i] in another position
        // because we need to get all poss
        trackedPositions.pop();
      }
    }
}
```

- isValidQueenPos() is easy to implement - make sure the new position of the queen is not be attackable by another queens

```
 const isValidQueenPos = (i, j, trackPositions) => {
     // Cannot be in the same row
    const existedRow = !!trackPositions.find(({ x }) => x === i);
    if (existedRow) return false;

     // Cannot be in the same col
    const existedCol = !!trackPositions.find(({ y }) => y === j);
    if (existedCol) return false;

    // cannot be in the same diagonal line
    const existedDiagonal = !!trackPositions.find(
      ({ x, y }) => Math.abs(x - i) === Math.abs(y - j)
    );
    if (existedDiagonal) return false;

    return true;
  };
```

### Transform the solutions to the output that the problem requires

- Sometimes we don't need to structure array with the same output that problem requires. Just go ahead with the simple and efficient interface for us - Time is limited.
- We can transform later - Transform with O(n) is fine !

```
  // Solutions: Array<[ Array<QueenPositions{x, y}> ]> -> Array<Array<FormattedString: "..Q." >>
 const transformToOutput = (solution) => the problem output
```
