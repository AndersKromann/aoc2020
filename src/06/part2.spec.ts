import { expect } from 'chai';
import { solve } from './part2';
import { readLines } from '../util';

const testInput = [
    'abc',
    '',
    'a',
    'b',
    'c',
    '',
    'ab',
    'ac',
    '',
    'a',
    'a',
    'a',
    'a',
    '',
    'b',
];

it('day6 part2 example', () => {
    expect(solve(testInput)).to.equal(6);
});

it('day6 part2', () => {
    expect(solve(readLines(6))).to.equal(3579);
});
