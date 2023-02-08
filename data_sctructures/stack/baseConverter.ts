import Stack from "./stack";

const baseConverter = (decNumber: number, base: number) => {
  const remStack = new Stack();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = decNumber;
  let rem;
  let baseString = "";
  if (!(base >= 2 && base <= 36)) return "";
  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }
  while (!remStack.isEmpty()) baseString += digits[remStack.pop()];
  return baseString;
};

console.log(baseConverter(100, 2));
console.log(baseConverter(100, 8));
console.log(baseConverter(100, 16));
console.log(baseConverter(100, 35));
