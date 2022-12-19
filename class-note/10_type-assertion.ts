// 타입 단언(type assertion)
let a;
a = 20;
a = 'a';
let b = a as string;

// DOM API 조작
// <div id="app">hi</div>;
let div = document.querySelector('div');
if (div) {
  div.innerText;
}
