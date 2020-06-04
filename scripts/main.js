// Calling every function in order for the whole cascade of functions to be activated;
// Does not matter what hierarchy or order the scripts are linked in index.html as long as 
// last one is main.js as it is the one to call the last function (which in turn has the "conversion" function that is being called from the fish.js file)

getFishData().then(
    () => {
        //
        console.log("inside", fishCollection);
        fishList();
    }
)
// when logging this it will prove that this will run first outside of the function;
// in the file (ie fishData.js) which is retrieving the information from the database, it is doing it in the background (which is going to take some time) while simultaneously other processes are happening
// the fishList function needs to be invoked inside the getFishData function;
// the getFishData function needs the fishList() information before it can be run
console.log("outside", fishCollection);

getLocationData().then(
    () => {
        locationList();
    }
)

getQuoteData().then(
    () => {
        quoteList();
    }
)


getTipData().then( 
    () => {
        console.log("inside", tipCollection)
        tipList();
    }
)
console.log("outside", tipCollection)

