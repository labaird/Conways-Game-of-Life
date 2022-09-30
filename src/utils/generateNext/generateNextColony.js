function isAlive (cell) {
    return cell === true;
}

export function copyColony (colony) {
    return colony.reduce((finalColony, row) => {
        finalColony.push([...row]);
        return finalColony;
    }, []);
}

function isLeftAlive (currentRow, currentColumn, grid) {
    const left = grid[currentRow][currentColumn - 1];

    return left === true;
}

function isRightAlive (currentRow, currentColumn, grid) {
    const right = grid[currentRow][currentColumn + 1];

    return right === true;
}

function isAboveAlive (currentRow, currentColumn, grid) {
    if (currentRow === 0) {
        return false;
    }

    const above = grid[currentRow - 1][currentColumn];

    return above === true;
}

function isBelowAlive (currentRow, currentColumn, grid) {
    if (currentRow === grid.length - 1) {
        return false;
    }

    const below = grid[currentRow + 1][currentColumn];

    return below === true;
}

function isUpperLeftAlive (currentRow, currentColumn, grid) {
    if (grid[currentRow - 1] !== undefined) {
        return grid[currentRow - 1][currentColumn - 1] === true;
    }

    return false;
}

function isUpperRightAlive (currentRow, currentColumn, grid) {
    if (grid[currentRow - 1] !== undefined) {
        return grid[currentRow - 1][currentColumn + 1] === true;
    }

    return false;
}

function isLowerLeftAlive (currentRow, currentColumn, grid) {
    if (grid[currentRow + 1] !== undefined) {
        return grid[currentRow + 1][currentColumn - 1] === true;
    }

    return false;
}

function isLowerRightAlive (currentRow, currentColumn, grid) {
    if (grid[currentRow + 1] !== undefined) {
        return grid[currentRow + 1][currentColumn + 1] === true;
    }

    return false;
}

function getNeighbors(column, row, grid) {
    const neighbors = [];
    const hasUpper = row > 0;
    const hasLower = row < grid.length - 1;
    const hasLeft = column > 0;
    const hasRight = column < grid[row].length - 1;

    if (hasUpper) {
        //left upper
        if (hasLeft) {
            neighbors.push(grid[row - 1][column - 1]);
        }
        //up
        neighbors.push(grid[row - 1][column]);
        //right upper
        if (hasRight) {
            neighbors.push(grid[row - 1][column + 1]);
        }
    }

    if (hasLower) {
        //left lower
        if (hasLeft) {
            neighbors.push(grid[row - 1][column - 1]);
        }
        //down
        neighbors.push(grid[row + 1][column]);
        //right lower
        if (hasRight) {
            neighbors.push(grid[row + 1][column + 1]);
        }
    }

    //left
    if (hasLeft) {
        neighbors.push(grid[row][column - 1]);
    }
    //right
    if (hasRight) {
        neighbors.push(grid[row][column + 1]);
    }

    return neighbors;
}

function countNeighbors(currentRow, currentColumn, grid) {
    let count = 0;

    if (grid[currentRow] === undefined || grid[currentRow][currentColumn] === undefined) {
        throw new Error(`Cell does not exist in grid at row: ${currentRow} column: ${currentColumn}`);
    }

    if (isLeftAlive(currentRow, currentColumn, grid)) {
        count = count + 1;
    }

    if (isUpperRightAlive(currentRow, currentColumn, grid)) {
        count = count + 1;
    }

    if (isRightAlive(currentRow, currentColumn, grid)) {
        count = count + 1;
    }

    if (isBelowAlive(currentRow, currentColumn, grid)) {
        count = count + 1;
    }

    if (isAboveAlive(currentRow, currentColumn, grid)) {
        count = count + 1;
    }

    if (isUpperLeftAlive(currentRow, currentColumn, grid)) {
        count = count + 1;
    }

    if (isLowerLeftAlive(currentRow, currentColumn, grid)) {
        count = count + 1;
    }

    if (isLowerRightAlive(currentRow, currentColumn, grid)) {
        count = count + 1;
    }

    return count;
}

export function generateNextColony (colony) {
    const result = copyColony(colony);

    for (let row = 0; row < colony.length; row = row + 1) {
        for (let column = 0; column < colony[row].length; column = column + 1) {
            const neighborsCount = countNeighbors(row, column, colony);

            if (isAlive(colony[row][column])) {
                if (neighborsCount !== 2 && neighborsCount !== 3) {
                    result[row][column] = false;
                }
            } else {
                if (neighborsCount === 3) {
                    result[row][column] = true;
                }
            }
        }
    }
    return result;
}
