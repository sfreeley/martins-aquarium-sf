//An array of objects for each individual fish
let fishCollection = [];

//fishData.js to get the data from the database;
const getFishData = () => {
    // gets info from database; then (a promise) states when you get this information
    // from the database you will convert the parameter(which will be in string format) into an array
    return fetch("http://localhost:8088/fish").then(
        (httpResponse) => {
            // this function parses string into array
            return httpResponse.json()
        }
        //this is a promise which will take the string that was parsed to an array as a paramter
        // and trying to 
    ).then(
        (arrayOfFish) => {
            fishCollection = arrayOfFish;
        }

    )
}

//any fish multiple of 3;
const mostHolyFish = () => {
    const holyFish = [];

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish);
        }
    }

    return holyFish
}

// Any fish multiple of 5;
const soldierFish = () => {
    const soldiers = [];

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            soldiers.push(fish);
        }
    }

    return soldiers
}

// Any fish not a multiple of 3 or 5
const nonHolyFish = () => {

    const regularFish = [];

    for (const fish of fishCollection) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFish.push(fish);
        }
    }

    return regularFish
}
