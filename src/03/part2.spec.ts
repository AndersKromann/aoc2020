import { expect } from 'chai';
import { solve } from './part2';
import { readLines } from '../util';

const testInput = [
    '..##.......',
    '#...#...#..',
    '.#....#..#.',
    '..#.#...#.#',
    '.#...##..#.',
    '..#.##.....',
    '.#.#.#....#',
    '.#........#',
    '#.##...#...',
    '#...##....#',
    '.#..#...#.#',
];

it('day3 part2 example', () => {
    expect(solve(testInput)).to.equal(336);
});

it('day3 part2', () => {
    expect(solve(readLines(3))).to.equal(3093068400);
});
