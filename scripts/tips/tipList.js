const tipList = () => {
    for (currentTipList of tipCollection) {
        const tipHTML = tipConversion(currentTipList);

        const tipArticleElement = document.querySelector(".tipList");

        tipArticleElement.innerHTML += tipHTML;
    }
}