import { expect } from 'chai';
import { solve } from './part1';
import { readLines } from '../util';

const testInput = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];

it('day2 part1 example', () => {
    expect(solve(testInput)).to.equal(2);
});

it('day2 part1', () => {
    expect(solve(readLines(2))).to.equal(410);
});
