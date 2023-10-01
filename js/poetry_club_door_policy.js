// Returns the firs letter of the string 
const frontDoorResponse = (string) => { return string[0]; };

// Returns H
console.log(frontDoorResponse('Huge hooves too'));

//Capitalize a word
const frontDoorPassword = (passWord) => {return passWord.toLowerCase()};

//returns the string to lower capitalized
console.log(frontDoorPassword('SHIRE'));
// returns the string 
console.log(frontDoorPassword('shire'));

//Get the last letter of the sentence
const backDoorResponse = (lastLetter) => { return lastLetter.slice(-1)}

//returns the last letter of the string
console.log(backDoorResponse('Stand so high'));
console.log(backDoorResponse('Huge hooves too'));
console.log(backDoorResponse('Impatiently waits for'));

//Be polite
const backDoorPassword = (backPass) => { return backPass[0].toUpperCase() + backPass.slice(1) + ', please'};

console.log(backDoorPassword('horse'));