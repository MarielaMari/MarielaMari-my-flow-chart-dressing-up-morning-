const amIGoingOut = true;
const isItRaining = true;
const isItSnowing = true;
const isItWarm = true;

if (amIGoingOut) {
    console.log('Am i going out?', amIGoingOut);

    if (!isItRaining) {
        console.log('Is it raining? Put raining set of clothes on', isItRaining);
    }
        if (!isItSnowing) {
            console.log('Is it snowing. Put snowing set of clothes on', isItSnowing);
        }
            if (!isItWarm) {
                console.log('Is it warm. Put warm set of clothes on', isItWarm);
            } else {
                console.log('Get the message? You have no appropriate clothes for this weather. You need to buy more clothes in future!!!');
            }
} 

if (!amIGoingOut) {
console.log('Do not change PJ');
}