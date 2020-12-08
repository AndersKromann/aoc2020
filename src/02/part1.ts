export const solve = (input: string[]): number => {
    let validPasswordCount = 0;
    for (const password of input) {
        if (validatePassword(password)) {
            validPasswordCount++;
        }
    }
    return validPasswordCount;
};

const validatePassword = (corruptedPassword: string) => {
    const split = corruptedPassword.split(' ');
    const range = split[0].split('-').map(Number);
    const givenLetter = split[1].slice(0, 1);
    const password = split[2];

    let count = 0;
    for (const letter of password) {
        if (letter === givenLetter) {
            count++;
        }
    }
    if (count >= range[0] && count <= range[1]) {
        return true;
    }
    return false;
};
