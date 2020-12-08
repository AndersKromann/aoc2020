import { expect } from 'chai';
import { solve } from './part2';
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

it('day8 part2 example', () => {
    expect(solve(testInput)).to.equal(8);
});

it('day8 part2', () => {
    expect(solve(readLines(8))).to.equal(2304);
});
