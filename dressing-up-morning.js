const dressingUpInMorining = (amIGoingOut, isItRaining, isItSnowing, isItWarm) => {

if (amIGoingOut) {
    console.log('Am i going out?', amIGoingOut);
    console.log('Check the weather.');

    if (isItRaining) {
        console.log('Is it raining?', isItRaining);
        console.log('Put raining set of clothes on and get out.');
    }
        if (isItSnowing) {
            console.log('Is it snowing?', isItSnowing);
            console.log('Put snowing set of clothes on and get out.')
        }
            if (isItWarm) {
                console.log('Is it warm?', isItWarm);
                console.log('Put clothes for warm weather on and get out.');
            }
                
}
};

console.log('\n');
dressingUpInMorining(true, true, false, false);
console.log('\n');
dressingUpInMorining(true, false, true, false);
console.log('\n');
dressingUpInMorining(true, false, false, true);
console.log('\n');
dressingUpInMorining(false, false, false, false);


