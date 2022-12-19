// 인터페이스
interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
}

let developer: Developer;
let person: Person;
// developer = person;
// person = developer;

interface Developer2 {
  name: string;
  skill: string;
}
class Person2 {
  name: string;
}
let developer2: Developer2;
let person2: Person2;
// developer = new Person2();

// 함수
let add = function (a: number) {
  // ...
};
let sum = function (a: number, b: number) {
  // ...
};
// add = sum;
sum = add;

// 제네릭
interface Empty<T> {
  // ...
}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
let notempty1 = NotEmpty<string>;
let notempty2 = NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;
