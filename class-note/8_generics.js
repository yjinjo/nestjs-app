function logText(text) {
    console.log(text);
    return text;
}
logText(10); // 숫자 10
logText('하이'); // 문자열 하이
logText(true); // 진위값 true
function logText2(text) {
    console.log(text);
    return text;
}
logText2('하이');
logText2(10);
logText2(true);
function logText3(text) {
    console.log(text);
    // text.split('').reverse().join('');
    return text;
}
function logNumber3(num) {
    console.log(num);
    return num;
}
logText3('a');
logNumber3(10);
function logText4(text) {
    console.log(text);
    return text;
}
var a = logText4('a');
// a.split('');
logText4(10);
function logText5(text) {
    console.log(text);
    return text;
}
var str = logText5('abc');
str.split('');
var login = logText5(true);
var obj = { value: 'abc', selected: false };
var obj2 = { value: 'abc', selected: false };
// 제네릭의 타입 제한
function logTextLength(text) {
    console.log(text.length);
    text.forEach(function (text) {
        console.log(text);
    });
    return text;
}
logTextLength(['hi']);
function logTextLength2(text) {
    console.log(text.length);
    return text;
}
logTextLength2('a'); // a
// logTextLength2(10);
logTextLength2({ length: 10 }); // { length: 10 }
