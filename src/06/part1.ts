export const solve = (input: string[]): number => {
    const groups = [];
    let nextGroup = [];
    for (const line of input) {
        if (line === '') {
            groups.push(nextGroup);
            nextGroup = [];
        } else {
            nextGroup.push(line);
        }
    }
    groups.push(nextGroup);

    const sum = groups
        .map((group) => countGroupAnswers(group))
        .reduce((a, b) => a + b, 0);

    return sum;
};

const countGroupAnswers = (group: string[]): number => {
    const countedLetters: string[] = [];
    let count = 0;

    for (const person of group) {
        for (const letter of person) {
            if (countedLetters.includes(letter)) {
                continue;
            }
            countedLetters.push(letter);
            count++;
        }
    }

    return count;
};
