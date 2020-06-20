const quoteList = () => {
    for (currentquoteList of quoteCollection) {
        
        const quoteHTML = quoteConversion(currentquoteList);

        const quoteArticleElement = document.querySelector(".quoteList");

        quoteArticleElement.innerHTML += quoteHTML;

    }
    
}

//targeting the toggleQuotes button
const quoteVisibilityButton = document.querySelector(".toggleQuotes");

//add eventListener to said button
quoteVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".quoteList").classList.toggle("hidden");
})