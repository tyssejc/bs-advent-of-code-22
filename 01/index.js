import { open } from 'node:fs/promises';

try {
  const file = await open("./input.txt");


  // pipe/compose would be much more elegant
  const raw = await file.readFile({ encoding: 'utf8'});
  
  const parsed = raw.split('\n\n').map((l) => l.split('\n'));

  const combined = parsed.map((g) => g.reduce((acc, val) => parseInt(val) + acc, 0));

  const sorted = combined.sort((a, b) => b - a);

  // part 1 solution
  console.log(sorted[0]);

  const topThree = sorted.reduce((acc, val, index) => {
    if (index > 2) val = 0;
    return acc + val;
  }, 0);

  // part 2 solution
  console.log(topThree);


} catch (e) {
  console.error(`um no we couldn't do that: ${e.message}`);
}