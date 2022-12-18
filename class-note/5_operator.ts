function logMessage(value: any) {
  console.log(value);
}
logMessage('hello');
logMessage(100);

let seho: string | number | boolean;

function logMessage2(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString;
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}
logMessage2('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name;
  // someone.skill;
  // someone.age;
}

askSomeone({ name: 'Developer', skill: '웹 개발' });
askSomeone({ name: '캡틴', age: 100 });

let capt: string & number & boolean;

function askSomeone2(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}

askSomeone2({ name: 'Developer', skill: '웹 개발', age: 100 });
