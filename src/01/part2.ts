export const solve = (input: number[]): number => {
    for (const a of input) {
        for (const b of input) {
            if (b == a) {
                continue;
            }
            for (const c of input) {
                if (c === a || c === b) {
                    continue;
                }
                if (a + b + c === 2020) {
                    return a * b * c;
                }
            }
        }
    }
};
