const maxArea = function(pipes: number[]) {
  let water = 0,
    start = 0,
    end = pipes.length - 1;

  const calculateAreaOfWater = (left: number, right: number) =>
    (right - left) * Math.min(pipes[left], pipes[right]);

  while (start < end) {
    water = Math.max(water, calculateAreaOfWater(start, end));
    if (pipes[start] < pipes[end]) {
      start = start + 1;
    } else {
      end = end - 1;
    }
  }

  return water;
};

export default maxArea;
