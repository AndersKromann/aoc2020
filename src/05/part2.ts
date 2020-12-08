export const solve = (input: string[]): number => {
    const sorted = input.map((plan) => getSeatID(plan)).sort((a, b) => a - b);

    let previous = 12;
    for (const seatID of sorted) {
        if (seatID - previous > 1) {
            return seatID - 1;
        }
        previous = seatID;
    }

    return 0;
};

export const getSeatID = (input: string): number => {
    const rowChars = input.slice(0, -3);
    const columnChars = input.slice(input.length - 3);

    let minRow = 0;
    let maxRow = 127;
    for (const char of rowChars) {
        const range = maxRow - minRow;
        if (char === 'F') {
            maxRow = maxRow - (Math.floor(range / 2) + 1);
        } else {
            minRow = minRow + (Math.floor(range / 2) + 1);
        }
    }
    if (maxRow !== minRow) {
        console.log(input, minRow, maxRow);
        throw "Didn't agree on min/max row";
    }
    const row = minRow;

    let minColumn = 0;
    let maxColumn = 7;
    for (const char of columnChars) {
        const range = maxColumn - minColumn;
        if (char === 'L') {
            maxColumn = maxColumn - (Math.floor(range / 2) + 1);
        } else {
            minColumn = minColumn + (Math.floor(range / 2) + 1);
        }
    }
    if (maxColumn !== minColumn) {
        throw "Didn't agree on min/max column";
    }
    const column = minColumn;

    const seatId = row * 8 + column;
    return seatId;
};
