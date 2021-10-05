// Task #1



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