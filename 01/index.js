import { open } from 'node:fs/promises';

try {
  const file = await open("./input.txt");
  const raw = await file.readFile({ encoding: 'utf8'});
  
  const parsed = raw.split('\n\n').map((l) => l.split('\n'));

  const combined = parsed.map((g) => g.reduce((acc, val) => parseInt(val) + acc, 0));

  console.log(combined);

  const sorted = combined.sort((a, b) => b - a);

  console.log(sorted);

} catch (e) {
  console.error(`um no we couldn't do that: ${e.message}`);
}