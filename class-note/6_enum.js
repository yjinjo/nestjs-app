var Shoes;
(function (Shoes) {
    Shoes["Nike"] = "\uB098\uC774\uD0A4";
    Shoes["Adidas"] = "\uC544\uB514\uB2E4\uC2A4";
})(Shoes || (Shoes = {}));
var myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'
var Answer;
(function (Answer) {
    Answer["Yes"] = "Y";
    Answer["No"] = "N";
})(Answer || (Answer = {}));
// 예제
function askQuestion(answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다');
    }
    else {
        console.log('오답입니다.');
    }
}
askQuestion(Answer.Yes);
// askQuestion('yes');
// askQuestion('y');
// askQuestion('예스');
