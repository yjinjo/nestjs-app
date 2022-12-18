enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스',
}

let myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'

enum Answer {
  Yes = 'Y',
  No = 'N',
}

// 예제
function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다');
  } else {
    console.log('오답입니다.');
  }
}
askQuestion(Answer.Yes);
// askQuestion('yes');
// askQuestion('y');
// askQuestion('예스');
