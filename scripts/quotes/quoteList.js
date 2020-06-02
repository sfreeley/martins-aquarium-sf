const quoteList = () => {
    for (currentquoteList of quoteCollection) {
        
        const quoteHTML = quoteConversion(currentquoteList);

        const quoteArticleElement = document.querySelector(".quoteList");

        quoteArticleElement.innerHTML += quoteHTML;

    }
    
}