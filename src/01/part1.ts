export const solve = (input: number[]): number => {
    for (const a of input) {
        for (const b of input) {
            if (a === b) continue;
            if (a + b === 2020) {
                return a * b;
            }
        }
    }
};
