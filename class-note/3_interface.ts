interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
let seho: User = {
  age: 20,
  name: '세호',
};

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

const capt = {
  name: '캡틴',
  age: 100,
};
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
arr[0] = 'z';

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

Object.keys(obj).forEach(function (value) {});
