//An array of objects for each individual fish
const fishCollection = [
    {
        name: "Angus",
        picture: "https://i.ytimg.com/vi/y6tdGVTgmm4/maxresdefault.jpg",
        species: "Parrot Fish",
        length: 8,
        location: "Sea of Google",
        food: "Popcorn"
    },
    {
        name: "Oliver",
        picture: "images/elephantnose_fish.jfif",
        species: "Elephantnose Fish",
        length: 23,
        location: "Africa freshwater",
        food: "Twizzlers"
    },
    {

        name: "Geraldine",
        picture: "images/dwarf_puffer_fish.jfif",
        species: "Dwarf pufferfish",
        length: 3.5,
        location: "Southweset India freshwater",
        food: "Wonder Bread"
    },
    {
        name: "Cory",
        picture: "images/cory_catfish.jfif",
        species: "Cory Catfish",
        length: 7.5,
        location: "Atlantic Ocean",
        food: "Coffee"
    },
    {
        name: "Whiskey",
        picture: "images/rainbow_shark.jpg",
        species: "Rainbow Shark Fish",
        length: 15,
        location: "Asia freshwater",
        food: "Eagle Rare Whiskey"
    },
    {

        name: "Kevin",
        picture: "images/clownfish.jfif",
        species: "Clownfish",
        length: 2,
        location: "Great Barrier Reef",
        food: "Sour Skittles"
    },
    {

        name: "Mrs. Magoo",
        picture: "images/diamond_goby.jfif",
        species: "Diamond Goby",
        length: 10,
        location: "Artic Ocean",
        food: "Lemonheads"
    },
    {
        name: "Gilmore",
        picture: "images/oscar.jfif",
        species: "Oscar Fish",
        length: 35,
        location: "Australia",
        food: "Left Twix"
    },
    {
        name: "Sophie",
        picture: "images/mandarinfish.jpg",
        species: "Mandarinfish",
        length: 5,
        location: "South America",
        food: "Right Twix"
    }

];

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
