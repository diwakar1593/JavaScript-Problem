/**
 * Problem Description:
 *
 * You are given a matrix representing a maze where '0' represents an open cell
 * and '1' represents a blocked cell. Your task is to implement a function to find
 * the minimum steps needed to navigate from the top-left corner (start) to the
 * bottom-right corner (destination). You can move in four directions: up, down,
 * left, and right. You cannot move into blocked cells.
 *
 * Example:
 * Input:
 * [
 *   [0, 0, 0, 0, 1],
 *   [1, 1, 0, 1, 0],
 *   [0, 0, 0, 0, 0],
 *   [0, 1, 1, 1, 1],
 *   [0, 0, 0, 0, 0]
 * ]
 * Output: 8
 *
 * Explanation:
 * The optimal path is (0,0) -> (0,1) -> (0,2) -> (0,3) -> (1,3) -> (1,4) -> (2,4) -> (3,4) -> (4,4).
 * The total steps required are 8.
 *
 * Constraints:
 * - The matrix will have dimensions M x N (1 <= M, N <= 100).
 * - The start and destination cells are always '0'.
 * - There is always a valid path from start to destination.
 */

function minStepsToDestination(maze) {
  const rows = maze.length;
  const cols = maze[0].length;

  // Function to check if a cell is valid and open
  function isValid(x, y) {
    return x >= 0 && x < rows && y >= 0 && y < cols && maze[x][y] === 0;
  }

  // Queue for BFS traversal
  const queue = [];
  queue.push({ x: 0, y: 0, steps: 0 });

  // Visited array to mark cells that have been visited
  const visited = new Array(rows).fill(null).map(() => new Array(cols).fill(false));
  visited[0][0] = true;

  // Possible moves: up, down, left, right
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  while (queue.length > 0) {
    const { x, y, steps } = queue.shift();

    if (x === rows - 1 && y === cols - 1) {
      return steps; // Reached destination
    }

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (isValid(newX, newY) && !visited[newX][newY]) {
        queue.push({ x: newX, y: newY, steps: steps + 1 });
        visited[newX][newY] = true;
      }
    }
  }

  // If the destination is not reached, this case should not occur in the given constraints.
  return -1;
}

// Example usage:
const maze = [
  [0, 0, 0, 0, 1],
  [1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0]
];

const result = minStepsToDestination(maze);
console.log(`Minimum Steps to Destination: ${result}`);
