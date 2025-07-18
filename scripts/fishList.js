import { database } from './aquariumData.js'

export const fishList = () => {
    //Generate an HTML representation of each fish
    let fishHTML = ''

    for (const fish of database.fish) {
        fishHTML += `
            <article class="fish">
                <img src="${fish.image}" alt="${fish.species} image" class="fish_image">
                <div class="fish_details">
                    <h2 class="fish_name">${fish.name}</h2>
                    <p class="fish_species">Species: ${fish.species}</p>
                    <p class="fish_length">Length: ${fish.length} inches</p>
                    <p class="fish_location">Location: ${fish.location}</p>
                    <p class="fish_diet">Diet: ${fish.diet}</p>
                </div>
            </article>
        `
    }

    return fishHTML
}