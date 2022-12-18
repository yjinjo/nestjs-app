function logText(text) {
  console.log(text);
  return text;
}
logText(10); // 숫자 10
logText('하이'); // 문자열 하이
logText(true); // 진위값 true

function logText2<T>(text: T): T {
  console.log(text);
  return text;
}
logText2<string>('하이');
logText2<number>(10);
logText2<boolean>(true);

function logText3(text: string) {
  console.log(text);
  // text.split('').reverse().join('');
  return text;
}
function logNumber3(num: number) {
  console.log(num);
  return num;
}
logText3('a');
logNumber3(10);
logText3(true);
