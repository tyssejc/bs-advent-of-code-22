import { open } from 'node:fs/promises';

// can't believe you have to do this in node for ES modules?!?!?!?
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
  
// now some pure functions
const extract = async (fileName) => {
  try {
    const file = await open(fileName);
    return await file.readFile({ encoding: 'utf8'});
  } catch (e) {
    console.error(`um no we couldn't do that: ${e.message}`);
  }
};

const parse = (raw) => raw.split('\n\n').map((l) => l.split('\n'));
  
const sum = (parsed) => parsed.map((g) => g.reduce((acc, val) => parseInt(val) + acc, 0));

const sort = (combined) => combined.sort((a, b) => b - a);

const returnHighest = (sorted) => sorted[0];

const sumTopThree = (sorted) => sorted.reduce((acc, val, index) => {
  if (index > 2) val = 0;
  return acc + val;
}, 0);

// put it in your pipe and smoke it
const part1 = pipe(
  parse,
  sum,
  sort
)(await extract(`${__dirname}/input.txt`));

// part 1 solution
console.log(`Part 1: ${returnHighest(part1)}`);

// part 2 solution
console.log(`Part 2: ${sumTopThree(part1)}`);
