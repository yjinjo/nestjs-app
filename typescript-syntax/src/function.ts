// optional parameter and default parameter
function buildUserInfo(name?: string, email = '-') {
  return { name, email };
}
const user = buildUserInfo('3');

// arrow function
const add = (a: number, b: number): number => a + b;

// method overloading
interface Storage {
  a: string;
}
interface ColdStorage {
  b: string;
}
function store(type: 'canned food'): Storage;
function store(type: 'icecream'): ColdStorage;

function store(type: 'canned food' | 'icecream') {
  if (type === 'canned food') {
    return { a: 'canned food' };
  } else if (type === 'icecream') {
    return { b: 'icecream' };
  } else {
    throw new Error('unsupported type');
  }
}

const c = store('canned food');
console.log(c);

const i = store('icecream');
console.log(i);
