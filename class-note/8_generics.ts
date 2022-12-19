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

function logText4(text: string | number) {
  console.log(text);
  return text;
}

const a = logText4('a');
// a.split('');
logText4(10);

function logText5<T>(text: T): T {
  console.log(text);
  return text;
}
const str = logText5<string>('abc');
str.split('');

const login = logText5<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown {
  value: string;
  selected: boolean;
}
const obj: Dropdown = { value: 'abc', selected: false };

interface Dropdown2<T> {
  value: T;
  selected: boolean;
}
const obj2: Dropdown2<string> = { value: 'abc', selected: false };

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}
logTextLength<string>(['hi']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength2('a');
// logTextLength2(10);
logTextLength2({ length: 10 });

// 제네릭의 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');
