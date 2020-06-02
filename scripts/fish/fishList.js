const fishList = () => {
 // Iterate the collection of fish objects (this is to ensure that every object you have in your array gets into the HTML)
    for (currentFishObject of fishCollection) {
        // Convert the current fish to its HTML representation (calling the function fishConverter and putting in the object of the fishCollection)
        const fishHTML = fishConverter(currentFishObject);

        // Find the <section> element in index.html (needed to do section because my CSS flexbox elements were on the section ".fish" class and not on ".fishList")
        const fishSectionElement = document.querySelector(".fish");

        // Put the fish HTML representation inside the <section> element (changing the contents under <section> and giving it the value (ie the HTML) of the fishConversion function</section>)
        fishSectionElement.innerHTML += fishHTML;
    }
}