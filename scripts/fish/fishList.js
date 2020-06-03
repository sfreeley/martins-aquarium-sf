// Function to show holy fish in the browser

const showHolyFish = () => {
    const fishObjectsArray = mostHolyFish();

    //looping through the fishObjectsArray that contains all the objects with multiples of 3
    for (const fishObject of fishObjectsArray) {
        //calling the function with the value of the HTML
        const holyHTMLRepresentation = fishConverter(fishObject);
        //selecting the class ".fish" where you will be putting your HTML 
        const holySectionElement = document.querySelector(".fish");
        //adding the HTML between the section element with class ".fish"
        holySectionElement.innerHTML += holyHTMLRepresentation;
    }
};

// Function to show soldier fish in the browser
const showSoldierFish = () => {
    const fishObjectsArray = soldierFish();
    for (const fishObject of fishObjectsArray) {
        const soldierHTMLRepresentation = fishConverter(fishObject);
        const soldierSectionElement = document.querySelector(".fish");
        soldierSectionElement.innerHTML += soldierHTMLRepresentation;
    }
}

// Function to show common fish in the browser
const showCommonFish = () => {
    const fishObjectsArray = nonHolyFish();
    for (const fishObject of fishObjectsArray) {
        const commonHTMLRepresentation = fishConverter(fishObject);
        const commonSectionElement = document.querySelector(".fish");
        commonSectionElement.innerHTML += commonHTMLRepresentation;
    }
}


const fishList = () => {
    showHolyFish();
    showSoldierFish();
    showCommonFish();
}