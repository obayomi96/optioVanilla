const arabicInput = document.getElementById('arabic-input');
const romanInput = document.getElementById('roman-input');
const arabicResult = document.getElementById('from-roman-result');
const romanResult = document.getElementById('to-roman-result');

arabicInput.addEventListener('input', (e) => {
  if (e.target.value === "") {
    romanResult.innerHTML = "";
  } else {
    romanResult.innerHTML = toRoman(e.target.value);
  }
});

romanInput.addEventListener('input', (e) => {
  const valid = /^\d+$/;
  if (e.target.value === "" || e.target.value.match(valid)) {
    arabicResult.innerHTML = "";
  } else {
    arabicResult.innerHTML = fromRoman(e.target.value);
  }
});

const toRoman = (num1) => {
  let roman = "";
  const romanList = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XV: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let arabic;
  if (num1 < 1 || num1 > 3999) {
    return "Invalid number!, please enter a number between 1 and 3999"
  } else {
    for (let key in romanList) {
      arabic = Math.floor(num1 / romanList[key]);
      if (arabic >= 0) {
        for (let i = 0; i < arabic; i++) {
          roman += key;
        }
      }
      num1 = num1 % romanList[key];
    }
  }
  return roman;
}

const fromRoman = (num) => {
  num = num.toUpperCase();
  const romanList = [
    "CM",
    "M",
    "CD",
    "D",
    "XC",
    "C",
    "XL",
    "L",
    "IX",
    "X",
    "IV",
    "V",
    "I"
  ];
  const intList = [
    900,
    1000,
    400,
    500,
    90,
    100,
    40,
    50,
    9,
    10,
    4,
    5,
    1
  ];
  let i = 0;
  let n = 0;
  for (let rn in romanList) {
    i = num.indexOf(romanList[rn]);
    while(i !=+ -1) {
      n += parseInt(intList[rn]);
      num = num.replace(romanList[rn], "-");
      i = num.indexOf(romanList[rn]);
    }
  }
  return n;
}