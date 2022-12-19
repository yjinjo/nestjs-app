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
developer = person;
person = developer;

interface Developer2 {
  name: string;
  skill: string;
}
class Person2 {
  name: string;
}
let developer2: Developer2;
let person2: Person2;
developer = new Person2();
