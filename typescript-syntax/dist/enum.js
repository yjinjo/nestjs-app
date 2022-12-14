var StarbucksGrade;
(function (StarbucksGrade) {
    StarbucksGrade["WELCOME"] = "WELCOME";
    StarbucksGrade[StarbucksGrade["GREEN"] = 1] = "GREEN";
    StarbucksGrade["GOLD"] = "GOLD";
})(StarbucksGrade || (StarbucksGrade = {}));
function getDiscount(v) {
    switch (v) {
        case StarbucksGrade.WELCOME:
            return 0;
        case StarbucksGrade.GREEN:
            return 5;
        case StarbucksGrade.GOLD:
            return 10;
    }
}
console.log(StarbucksGrade);
console.log(StarbucksGrade.WELCOME);
console.log(StarbucksGrade[1]);
console.log(getDiscount(StarbucksGrade.GOLD));
