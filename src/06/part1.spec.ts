import { expect } from 'chai';
import { solve } from './part1';
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

it('day6 part1 example', () => {
    expect(solve(testInput)).to.equal(11);
});

it('day6 part1', () => {
    expect(solve(readLines(6))).to.equal(7027);
});
