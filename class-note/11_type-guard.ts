interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Making' };
}
let tony = introduce();

if ((tony as Developer).skill) {
  let skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  let age = (tony as Person).age;
  console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  let skill = tony.skill;
  console.log(skill);
} else {
  let age = tony.age;
  console.log(age);
}
