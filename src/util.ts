import * as fs from 'fs';

export const readLines = (day: number): string[] => {
    const dayPath = day < 10 ? '0' + day.toString() : day.toString();
    return fs
        .readFileSync(`./src/${dayPath}/input.txt`)
        .toString()
        .split('\n')
        .map((s) => s.replace(/\r$/, ''));
};
