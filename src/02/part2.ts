export const solve = (input: string[]): number => {
    let validPasswords = 0;

    for (const password of input) {
        if (validatePassword(password)) {
            validPasswords++;
        }
    }

    return validPasswords;
};

const validatePassword = (corruptedPassword: string): boolean => {
    const split = corruptedPassword.split(' ');
    const positions = split[0].split('-').map(Number);
    const givenLetter = split[1].slice(0, 1);
    const password = split[2];

    let isValid = false;
    if (password[positions[0] - 1] === givenLetter) {
        isValid = !isValid;
    }
    if (password[positions[1] - 1] === givenLetter) {
        isValid = !isValid;
    }
    return isValid;
};
