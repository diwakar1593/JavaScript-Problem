function ratInMaze(maze) {
    const size = maze.length;
    const solution = Array.from({ length: size }, () => Array(size).fill(0));

    if (!findPath(maze, 0, 0, solution)) {
        return "No path found!";
    }
    return solution;
}

function findPath(maze, x, y, solution) {
    const size = maze.length;

    // Check if (x, y) is the target of the maze
    if (x === size - 1 && y === size - 1) {
        solution[x][y] = 1;
        return true;
    }

    // Check if the move is valid
    if (isSafeToGo(maze, x, y)) {
        solution[x][y] = 1;

        // Move forward in the x direction
        if (findPath(maze, x + 1, y, solution)) {
            return true;
        }
        
        // If moving in the x direction didn't lead to a solution, move down in the y direction
        if (findPath(maze, x, y + 1, solution)) {
            return true;
        }

        // If none of the above movements led to a solution, then backtrace (mark this cell as 0)
        solution[x][y] = 0;
        return false;
    }
    return false;
}

function isSafeToGo(maze, x, y) {
    const size = maze.length;

    return (
        x >= 0 && y >= 0 && x < size && y < size && maze[x][y] === 1 && !this.visited[x][y]
    );
}

// Example usage:
const maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1],
];

console.log(ratInMaze(maze));
