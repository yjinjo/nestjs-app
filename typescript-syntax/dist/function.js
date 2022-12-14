function buildUserInfo(name, email = '-') {
    return { name, email };
}
const user = buildUserInfo('3');
const add = (a, b) => a + b;
function store(type) {
    if (type === 'canned food') {
        return { a: 'canned food' };
    }
    else if (type === 'icecream') {
        return { b: 'icecream' };
    }
    else {
        throw new Error('unsupported type');
    }
}
const c = store('canned food');
console.log(c);
const i = store('icecream');
console.log(i);
