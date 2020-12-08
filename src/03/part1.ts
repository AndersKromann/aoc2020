export const solve = (input: string[]): number => {
    let treeCount = 0;

    let x = 0;

    for (let y = 0; y < input.length; y++) {
        let currentSquare = input[y][x];
        if (currentSquare === '#') {
            treeCount++;
        }
        x += 3;
        if (x >= input[y].length) {
            x = x - input[y].length;
        }
    }

    return treeCount;
};
