"use strict";

console.log(`EXTENDED CHALLANGES`);

// Challange 1
//params: num
//return: str
const getGrade = (number) => {
  if (number >= 90 && number <= 100) {
    return "A";
  } else if (number >= 80) {
    return "B";
  } else if (number >= 70) {
    return "C";
  } else if (number >= 60) {
    return "D";
  } else if (number < 60 && number > 0) {
    return "F";
  } else {
    return "Enter the correct number";
  }
};
console.log(getGrade(91));
console.log(getGrade(85));
console.log(getGrade(77));
console.log(getGrade(63));
console.log(getGrade(59));
console.log(getGrade(0));

// Challange 2
//params: boolean, boolean
//return: num
const prioritize = (urgent, important) => {
  if (urgent && important) {
    return 1;
  } else if (important && !urgent) {
    return 2;
  } else if (urgent && !important) {
    return 3;
  } else if (!urgent && !important) {
    return 4;
  }
};
console.log(prioritize(true, true));
console.log(prioritize(false, true));
console.log(prioritize(true, false));
console.log(prioritize(false, false));

// Challange 3
//params: num, num
//return: num
const calculatePay = (wage, hours) => {
  let paycheck = wage * 40;
  if (hours > 40) {
    const overtimeHours = hours - 40;
    const overtimePay = wage * 1.5;
    paycheck += overtimePay * overtimeHours;
  }
  return paycheck;
};
console.log(calculatePay(12, 60));
console.log(calculatePay(10, 50));
