import { expect } from 'chai';
import { solve } from './part2';
import { readLines } from '../util';

const testInput = [1721, 979, 366, 299, 675, 1456];

it('day1 part2 example', () => {
    expect(solve(testInput)).to.equal(241861950);
});

it('day1 part2', () => {
    expect(solve(readLines(1).map((str) => Number(str)))).to.equal(236430480);
});
