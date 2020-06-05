const locationList = () => {
    for (currentLocationObject of locationCollection) {

        const locationHTML = locationConverter(currentLocationObject);

        const locationArticleElement = document.querySelector(".locationList");

        locationArticleElement.innerHTML += locationHTML;
    }
}

const locationVisibilityButton = document.querySelector(".toggleLocation");

locationVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".locationList").classList.toggle("hidden");
})