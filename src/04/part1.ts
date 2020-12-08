export const solve = (input: string[]): number => {
    let passports = splitPassports(input);

    let validCount = 0;
    for (const passport of passports) {
        let isValid = true;
        isValid = isValid && passport.includes('byr');
        isValid = isValid && passport.includes('iyr');
        isValid = isValid && passport.includes('eyr');
        isValid = isValid && passport.includes('hgt');
        isValid = isValid && passport.includes('hcl');
        isValid = isValid && passport.includes('ecl');
        isValid = isValid && passport.includes('pid');
        if (isValid) {
            validCount++;
        }
    }
    return validCount;
};

const splitPassports = (input: string[]): string[] => {
    let result: string[] = [];
    let nextPassport: string[] = [];
    let index = 0;
    for (const line of input) {
        if (line === '') {
            result.push(nextPassport.join(' '));
            nextPassport = [];
        } else {
            nextPassport.push(line);
        }
    }
    result.push(nextPassport.join(' '));
    return result;
};
