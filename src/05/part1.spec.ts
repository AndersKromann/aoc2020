import { expect } from 'chai';
import { solve, getSeatID } from './part1';
import { readLines } from '../util';

const testInput = 'FBFBBFFRLR';

const testInputs = {
    BFFFBBFRRR: 567,
    FFFBBBFRRR: 119,
    BBFFBBFRLL: 820,
};

it('day5 part1 example', () => {
    expect(getSeatID(testInput)).to.equal(357);
});

it('day5 part1 more examples', () => {
    for (const [key, value] of Object.entries(testInputs)) {
        expect(getSeatID(key)).to.equal(value);
    }
});

it('day5 part1', () => {
    expect(solve(readLines(5))).to.equal(880);
});
