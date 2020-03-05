const arabicInput = document.getElementById('arabic-input');
const romanInput = document.getElementById('roman-input');
const arabicResult = document.getElementById('from-roman-result');
const romanResult = document.getElementById('to-roman-result');
const convertToRoman = document.getElementById('convert-to-roman');
const convertFromRoman = document.getElementById('convert-from-roman');

arabicInput.addEventListener('input', (e) => {
  // add conditions here
  romanResult.textContent += toRoman(` ${e.target.value}`);
});

romanInput.addEventListener('input', (e) => {
  arabicResult.textContent += fromRoman(` ${e.target.value}`);
});

const toRoman = (num) => {
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
    for (let key in romanList) {
      arabic = Math.floor(num / romanList[key]);
      if (arabic >= 0) {
        for (let i = 0; i < arabic; i++) {
          roman += key;
        }
      }
      if (typeof(num) === undefined) {
        return "Error, please refersh page and try again"
      }
      num = num % romanList[key];
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
    while(i != -1) {
      n += parseInt(intList[rn]);
      num = num.replace(romanList[rn], "-");
      i = num.indexOf(romanList[rn]);
    }
  }
  return n;
}