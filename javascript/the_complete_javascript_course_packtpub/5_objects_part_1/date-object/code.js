//Current date and time
let x = new Date();
console.log(x);


//Choosing a specific date and time
x = new Date(2017, 11, 15, 0, 0, 0);
console.log(x);

//Use an integer value representing the nyumber of miliseconds since 01/01/1970 00:00:00 UTC
x = new Date(2049494944595);
console.log(x);

console.log(x.getTime());

let y = Date.now();
console.log(y);

//Return the day of the week for a specific date
//
let z = new Date(2019, 10, 8);
const dayOfWeek = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
];
console.log(dayOfWeek[z.getDay()]);

//create a new date object
let now = new Date();
console.log(now);
console.log(now.getMinutes());

let start, end, total;

start = new Date();
start = start.getTime();

for(let i = 0; i < 1000; i ++){
    console.log(i);
}

end = new Date();
end = end.getTime();

console.log('Total: ' + (end - start));

