function generateRandomBoolean () {
    const result = Math.round(Math.random());

    return result === 1;
}

function generateMatrixValue (isRandom) {
    if (isRandom) {
        return generateRandomBoolean();
    }

    return false;
}

export function generateMatrix (rowNum, columnNum, isRandom) {
    const result = [];

    for (let row = 0; row < rowNum; row = row + 1) {
        const newRow = [];

        for (let column = 0; column < columnNum; column = column + 1) {
            newRow.push(generateMatrixValue(isRandom));
        }

        result.push(newRow);
    }

    return result;
}
