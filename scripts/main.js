// Calling every function in order for the whole cascade of functions to be activated;
// Does not matter what hierarchy or order the scripts are linked in index.html as long as 
// last one is main.js as it is the one to call the last function (which in turn has the "conversion" function that is being called from the fish.js file)

fishList();
locationList();
quoteList();
tipList();
