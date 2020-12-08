import { expect } from 'chai';
import { solve } from './part1';
import { readLines } from '../util';

const testInput = [
    'nop +0',
    'acc +1',
    'jmp +4',
    'acc +3',
    'jmp -3',
    'acc -99',
    'acc +1',
    'jmp -4',
    'acc +6',
];

it('day8 part1 example', () => {
    expect(solve(testInput)).to.equal(5);
});

it('day8 part1', () => {
    expect(solve(readLines(8))).to.equal(2051);
});
