const fishList = () => {
 // Iterate the collection of fish objects
    for (currentFishObject of fishCollection) {
        // Convert the current fish to its HTML representation
        const fishHTML = fishConverter(currentFishObject);

        // Find the <section> element in index.html
        const fishSectionElement = document.querySelector(".fish");

        // Put the fish HTML representation inside the <section> element
        fishSectionElement.innerHTML += fishHTML;
    }
}