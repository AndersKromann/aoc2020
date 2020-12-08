export const solve = (input: string[]): number => {
    let passports = splitPassports(input);
    let validCount = 0;

    for (const passport of passports) {
        if (validatePassport(passport)) {
            validCount++;
        }
    }

    return validCount;
};

export const validatePassport = (passport: string): boolean => {
    if (!validateExistingFields(passport)) {
        return false;
    }
    const fields = passport.split(' ').map((field) => field.split(':'));
    let isValid = true;
    for (const fieldGroup of fields) {
        let fieldValid = validateField(fieldGroup[0], fieldGroup[1]);
        isValid = isValid && fieldValid;
    }
    return isValid;
};

export const validateExistingFields = (passport: string): boolean => {
    let isValid = true;
    isValid = isValid && passport.includes('byr');
    isValid = isValid && passport.includes('iyr');
    isValid = isValid && passport.includes('eyr');
    isValid = isValid && passport.includes('hgt');
    isValid = isValid && passport.includes('hcl');
    isValid = isValid && passport.includes('ecl');
    isValid = isValid && passport.includes('pid');
    return isValid;
};

export const validateField = (fieldType: string, value: string): boolean => {
    switch (fieldType) {
        case 'byr':
            return 1920 <= Number(value) && Number(value) <= 2002;
        case 'iyr':
            return 2010 <= Number(value) && Number(value) <= 2020;
        case 'eyr':
            return 2020 <= Number(value) && Number(value) <= 2030;
        case 'hgt':
            if (value.endsWith('cm')) {
                const val = Number(value.slice(0, -2));
                return val >= 150 && val <= 193;
            } else if (value.endsWith('in')) {
                const val = Number(value.slice(0, -2));
                return val >= 59 && val <= 76;
            } else {
                return false;
            }
        case 'hcl':
            if (value.startsWith('#')) {
                let regexp = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;
                return regexp.test(value);
            }
            return false;
        case 'ecl':
            const valid = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
            return valid.includes(value);
        case 'pid':
            return value.length === 9 && Number.isSafeInteger(Number(value));
        case 'cid':
            return true;
    }
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
