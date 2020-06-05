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

//selecting the class="typeChoice" dropdown menu
const fishTypeDropdown = document.querySelector(".typeChoice");
//select the content area you want to clear 
const contentTarget = document.querySelector(".fish");
//function to clear the content of the fishList
const clearFishList = () => contentTarget.innerHTML = ""

// add the event listener of "change" to detect when the user chooses a dropdown selection
fishTypeDropdown.addEventListener("change", (clickEvent) => {
    //get the value of the option chosen by the user
    const userChoice = clickEvent.target.value 

    //if the user choses Holy, clear the list and only show holy fish
    if (userChoice === "holy") {
        // invoking function from above that clears the fishList
        clearFishList();
        showHolyFish();
    } else if (userChoice === "soldier") {
        clearFishList();
        showSoldierFish();
    } else if (userChoice === "plebs") {
        clearFishList();
        showCommonFish();
    } else if (userChoice === "all") {
        clearFishList();
        fishList();
    }
})

//targeting toggle Fish button with class="toggleFish"
const fishVisibilityButton = document.querySelector(".toggleFish");

//add event listener to said button
fishVisibilityButton.addEventListener("click", clickEvent => {
    //where do you want this click to affect? your fishList to be hidden or not hidden
    document.querySelector(".fish").classList.toggle("hidden");
})