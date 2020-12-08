import { expect } from 'chai';
import { solve } from './part1';
import { readLines } from '../util';

const testInput = [
    'light red bags contain 1 bright white bag, 2 muted yellow bags.',
    'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
    'bright white bags contain 1 shiny gold bag.',
    'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
    'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
    'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
    'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
    'faded blue bags contain no other bags.',
    'dotted black bags contain no other bags.',
];

it('day7 part1 example', () => {
    expect(solve(testInput)).to.equal(4);
});

it('day7 part1', () => {
    expect(solve(readLines(7))).to.equal(226);
});
