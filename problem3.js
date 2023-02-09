function isLGSeven(inputValue) {
  let diffValue = Math.abs(inputValue - 7);
  if (diffValue < 7) {
    return inputValue-7;
  } else {
    return 2 * inputValue;
  }
}

console.log(isLGSeven(15));  

