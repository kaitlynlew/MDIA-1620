
let horseName = "Jamille";
console.log(horseName);

let horseAge = 10;
console.log(horseAge);
let isHorseInside = true;

console.log(typeof 12345);
console.log(typeof "12345");
console.log(typeof false);


// LESSON-4 LAB 

let horseNickname = "Jam";
console.log(horseNickname);

let horseIntroduction =("This is my horse " + horseName + ", her nickname is " + horseNickname + "!");
console.log(horseIntroduction)

const STABLE_MONTHLY_FEE = 90;
let moneySaved = (100 * 3)/10;

console.log(`You will save + ${moneySaved} with a 10% discount!`);

// LESSON-5 Code

if (isHorseInside) {
    console.log (`🦄 ${horseName} is inside`)
} else {
    console.log (`🦄 ${horseName} is outside`)
}

// LESSON-6 LAB
// Horse = [name, age, isInside, horseNickname]

let horseOne = [horseName, horseAge, isHorseInside, horseNickname];
let horseTwo = ["Lucie", 7, false, "Cie"];

let horseNames = [horseName, "Lucie", "Leanna"];
let horseAges = [horseAge, 7, 13];
let horseNicknames = [horseNickname, "Cie", "Anna"];
let areHorsesInside = [isHorseInside, false, true];


// LAB 6

let horseIntro = `Welcome to my stables! There are currently ${horseNames.length} horses staying at my stables:`;
console.log(horseIntro);
console.log(horseNames[0] + " is " + horseAges[0] + ", and prefers to go by " + horseNicknames[0] + ".")
console.log(horseNames[1] + " is " + horseAges[1] + ", and prefers to go by " + horseNicknames[1] + ".")
console.log(horseNames[2] + " is " + horseAges[2] + ", and prefers to go by " + horseNicknames[2] + ".")

if (areHorsesInside[0]) {
    console.log (`🦄 ${horseNames[0]} is inside`)
} else {
    console.log (`🦄 ${horseNames[0]} is outside`)
}

if (areHorsesInside[1]) {
    console.log (`🐴 ${horseNames[1]} is inside`)
} else {
    console.log (`🐴 ${horseNames[1]} is outside`)
}

if (areHorsesInside[2]) {
    console.log (`🦗 ${horseNames[2]} is inside`)
} else {
    console.log (`🦗 ${horseNames[2]} is outside`)
}