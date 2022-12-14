enum StarbucksGrade {
  WELCOME = 'WELCOME',
  GREEN = 1,
  GOLD = 'GOLD',
}

function getDiscount(v: StarbucksGrade): number {
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
