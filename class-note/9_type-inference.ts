// 타입 추론 기본 1
let a = 'abc';

function getB(b = 10) {
  let c = 'hi';
  return b + c;
}

// 타입 추론 기본 2
interface Dropdown<T> {
  value: T;
  title: string;
}
let shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello',
};
