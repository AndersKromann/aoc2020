import { expect } from 'chai';
import { solve } from './part2';
import { readLines } from '../util';

const testInput = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];

it('day2 part2 example', () => {
    expect(solve(testInput)).to.equal(1);
});

it('day2 part2', () => {
    expect(solve(readLines(2))).to.equal(694);
});
