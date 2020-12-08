import { count } from 'console';

interface BagOrder {
    type: string;
    count: number;
}

let bagMap = new Map<string, BagOrder[]>();

export const solve = (input: string[]): number => {
    input.forEach((rule) => bagMap.set(rule.split(' bags contain ')[0], []));
    input.forEach((rule) => parseRule(rule));

    return countChildren('shiny gold');
};

const countChildren = (bagType: string): number => {
    const children = bagMap.get(bagType);

    let sum = 0;
    for (const order of children) {
        sum = sum + order.count;
        sum = sum + countChildren(order.type) * order.count;
    }

    return sum;
};

const parseRule = (rule: string): void => {
    const split = rule.split(' bags contain ');

    const type = split[0];
    const canContain = split[1].split(', ');

    for (const containType of canContain) {
        for (const bagType of bagMap.keys()) {
            if (containType.includes(bagType)) {
                const split = containType.split(' ' + bagType);
                const order: BagOrder = {
                    type: bagType,
                    count: Number(split[0]),
                };
                bagMap.set(type, [...bagMap.get(type), order]);
            }
        }
    }
};
