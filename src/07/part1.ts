let bagMap = new Map<string, string[]>();

export const solve = (input: string[]): number => {
    input.forEach((rule) => bagMap.set(rule.split(' bags contain ')[0], []));
    input.forEach((rule) => parseRule(rule));

    let count = 0;
    for (const bagType of bagMap.keys()) {
        if (canContainGold(bagType)) {
            count++;
        }
    }

    return count;
};

const canContainGold = (bagType: string): boolean => {
    if (bagMap.get(bagType).includes('shiny gold')) {
        return true;
    }

    if (bagMap.get(bagType).some((childBag) => canContainGold(childBag))) {
        return true;
    }

    return false;
};

const parseRule = (rule: string): void => {
    const split = rule.split(' bags contain ');

    const type = split[0];
    const canContain = split[1].split(', ');

    for (const containType of canContain) {
        for (const bagType of bagMap.keys()) {
            if (containType.includes(bagType)) {
                bagMap.set(type, [...bagMap.get(type), bagType]);
            }
        }
    }
};
