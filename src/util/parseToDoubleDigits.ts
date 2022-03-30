function parseToDoubleDigits(second: number) {
  if (second > 9) {
    return `${second}`;
  } else {
    return `0${second}`;
  }
}

export default parseToDoubleDigits;
