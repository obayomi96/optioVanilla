import * as RomanNumerals from './utils/RomanNumerals.js';

const arabicInput = document.getElementById('arabic-input');
const romanInput = document.getElementById('roman-input');
const arabicResult = document.getElementById('from-roman-result');
const romanResult = document.getElementById('to-roman-result');

arabicInput.addEventListener('input', (e) => {
  if (e.target.value === "") {
    romanResult.innerHTML = "";
  } else {
    romanResult.innerHTML = RomanNumerals.toRoman(e.target.value);
  }
});

romanInput.addEventListener('input', (e) => {
  const valid = /^\d+$/;
  if (e.target.value === "" || e.target.value.match(valid)) {
    arabicResult.innerHTML = "";
  } else {
    arabicResult.innerHTML = RomanNumerals.fromRoman(e.target.value);
  }
});
