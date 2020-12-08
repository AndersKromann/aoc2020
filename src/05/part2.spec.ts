import { expect } from 'chai';
import { solve } from './part2';
import { readLines } from '../util';

it('day5 part2', () => {
    expect(solve(readLines(5))).to.equal(731);
});
