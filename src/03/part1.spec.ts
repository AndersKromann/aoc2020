import { expect } from 'chai';
import { solve } from './part1';
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

it('day3 part1 example', () => {
    expect(solve(testInput)).to.equal(7);
});

it('day3 part1', () => {
    expect(solve(readLines(3))).to.equal(268);
});
