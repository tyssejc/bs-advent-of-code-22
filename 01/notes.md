hmm.

should I do this in node or python?

node it is then.

what is the input?
- plain text
- list of sets of integers
- one integer per line
- space between each set of integers

I am already overcomplicating things


ok. I downloaded the input as txt file.
node filesystem API to read the text.
dangit what's the dang syntax
what?! you can't use `import` unless it's a module, wtf

npm init I guess? lololol

ok YAY!

ok split by `\n\n`
and then by `\n`
YEESSSSS

now ... array methods to the rescue!

shit. forEach? map?
map! you good ol basterd

now... I want to add all these mofos together ........
reduuuuuuuuce!

shit. sort can be used without an argument but that's not what we want here
ok MDN saves the day again. `array.sort((a,b) => b - a)` FTMFW

YAAAYAYAYAYAYAYYAYA


## refactoring

I don't have to do this but I saw that this was a good opportunity to practice function composition so
deal with it

wow!! can't believe that kind of worked.
ok so I don't want to mix async and sync functions in pipe.
let's make the pipe input whatever the filestream returns

whhaaaat it can't find input.txt now? -_-

ok doesn't node have __dirname or something
yes

WHAAAAT
`__dirname is not defined in ES module scope`

FUUUUUUUUU

ok google what's up

[ayfkm](https://bobbyhadz.com/blog/javascript-dirname-is-not-defined-in-es-module-scope)

w/e ok.

NICEEEEE

lol not really cleaner. but at least it's (kinda) functional amirite?
