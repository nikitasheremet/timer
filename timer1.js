const alarmBeepBoop = function (alarmsArray) {
  const doSetTimeout = function (time) {
    setTimeout(function () {
      process.stdout.write('\x07');
    }, time * 1000);
  };
  for (let i = 0; i < alarmsArray.length; i++) {
    doSetTimeout(alarmsArray[i]);
  }
};
let argumentsArray = process.argv.slice(2);
let alarms = argumentsArray.filter(item => Number(item) > 0 && Number.isInteger(Number(item)));
alarmBeepBoop(alarms); 