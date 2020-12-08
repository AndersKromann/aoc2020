export const solve = (input: string[]): number => {
    const slope1 = getTreeCountForSlope(input, 1, 1);
    const slope2 = getTreeCountForSlope(input, 3, 1);
    const slope3 = getTreeCountForSlope(input, 5, 1);
    const slope4 = getTreeCountForSlope(input, 7, 1);
    const slope5 = getTreeCountForSlope(input, 1, 2);
    return slope1 * slope2 * slope3 * slope4 * slope5;
};

const getTreeCountForSlope = (
    input: string[],
    right: number,
    down: number,
): number => {
    let treeCount = 0;

    let x = 0;

    for (let y = 0; y < input.length; y += down) {
        let currentSquare = input[y][x];
        if (currentSquare === '#') {
            treeCount++;
        }
        x += right;
        if (x >= input[y].length) {
            x = x - input[y].length;
        }
    }

    return treeCount;
};
