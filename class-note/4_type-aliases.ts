interface Person {
  name: string;
  age: number;
}

let seho: Person = {
  name: '세호',
  age: 30,
};

type Person2 = {
  name: string;
  age: number;
};

let seho2: Person2 = {
  name: '세호',
  age: 30,
};

type MyString = string;
let str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}
