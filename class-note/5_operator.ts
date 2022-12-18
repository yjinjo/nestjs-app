function logMessage(value: any) {
  console.log(value);
}
logMessage('hello');
logMessage(100);

function logMessage2(value: string | number) {
  console.log(value);
}
logMessage2('hello');
logMessage(100);
