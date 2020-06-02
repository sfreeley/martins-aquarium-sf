const locationConverter = (locationObject) => {
    const locationHTMLRepresentation = `
    <section class="location">
         <div class="fish__details">
                <img class="location__picture"
                    src=${locationObject.picture}
                    alt="Beautiful picture of ${locationObject.name} Sea" />
         </div>
        <div class="location__details">
            ${locationObject.description}
        </div>
    </section>
    
    `
    return locationHTMLRepresentation;
}