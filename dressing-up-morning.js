const { goingOut } = require("./goingOut");
const { raining } = require("./raining");
const { snowing } = require("./snowing");
const { warm } = require("./warm");



const dressingUpInMorining = (amIGoingOut, isItRaining, isItSnowing, isItWarm) => {
    goingOut(amIGoingOut);
    raining(isItRaining);
    snowing(isItSnowing);
    warm(isItWarm);
};



console.log('\n');
dressingUpInMorining(true, true, false, false);
console.log('\n');
dressingUpInMorining(true, false, true, false);
console.log('\n');
dressingUpInMorining(true, false, false, true);
console.log('\n');
dressingUpInMorining(false, false, false, false);


