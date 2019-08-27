const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

stdin.on('data', (key) => {
  // process.stdout.write(key);
  if (key === '\u0062') process.stdout.write('\x07');
  if (key >= 0 && key <= 9) alarmBeepBoop(key);
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();
  }
});

const alarmBeepBoop = function (time) {
  setTimeout(function () {
    process.stdout.write('\x07');
  }, time * 1000);
}; 