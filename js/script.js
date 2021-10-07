// Task #1
const example1 = Boolean( Number(`10`)) + 1; // 2, number
const example2 = `sub` + Number(false); // sub0, string
const example3 = 16 * ` 91 `; // 1456, number
const example4 = true-70; // -69, number
const example5 = Number(1 + String(1)) + 1; // 12, number

console.log(typeof example1);
console.log(typeof example2);
console.log(typeof example3);
console.log(typeof example4);
console.log(typeof example5);




// Task #2
const seconds = 60 * 60; // 3600 секунд в одном часе
const hour =  +prompt(`Введите количество часов`);

console.log(typeof seconds);
console.log(typeof hour);

const secondInHour = seconds * hour;
alert( secondInHour );

console.log(typeof secondInHour);


// Task #3
let num = 1;
num += 12;
num -= 12;
num *= 5;
num /= 7;
num++;
num--;
alert(num);