const tipList = () => {
    for (currentTipList of tipCollection) {
        const tipHTML = tipConversion(currentTipList);

        const tipArticleElement = document.querySelector(".tipList");

        tipArticleElement.innerHTML += tipHTML;
    }
}

//defining what selector you want to target(class:"toggleTips" on toggle tips button)
const tipVisibilityButton = document.querySelector(".toggleTips");

//adding the click event listener to the toggle button
tipVisibilityButton.addEventListener("click", clickEvent => {
    //what we are trying to make hidden and unhidden
    document.querySelector(".underTheBanner__right").classList.toggle("hidden");
    document.querySelector(".tipList").classList.toggle("hidden");
})