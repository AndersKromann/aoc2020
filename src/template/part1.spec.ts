import { expect } from 'chai';
import { solve } from './part1';
import { readLines } from '../util';

const testInput = [1721, 979, 366, 299, 675, 1456];

it('dayN part1 example', () => {
    expect(solve(testInput)).to.equal(514579);
});

it('dayN part1', () => {
    expect(solve(readLines(1).map((str) => Number(str)))).to.equal(974304);
});
