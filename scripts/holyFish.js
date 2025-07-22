import { database } from './aquariumData.js'

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFishHTML = ""

    for (const fishLength of database.fish) {
        if (fishLength.length % 3 === 0 && fishLength.length % 5 != 0) {
            holyFishHTML += `
            <article class="holy_fish">
                <img src="${fishLength.image}" alt="${fishLength.species} image" class="fish_image">
                <h3 class="location_name">${fishLength.name}</h3>
                <p class="location_species">Length: ${fishLength.length}</p>
                <p class="location_description">Location: ${fishLength.location}</p>
            </article>
        `
        }
    }

    return holyFishHTML
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
     let soldierFishHTML = ""

    for (const fishLength of database.fish) {
        if (fishLength.length % 5 === 0) {
            soldierFishHTML += `
            <article class="soldier_fish">
                <img src="${fishLength.image}" alt="${fishLength.species} image" class="fish_image">
                <h3 class="location_name">${fishLength.name}</h3>
                <p class="location_species">Length: ${fishLength.length}</p>
                <p class="location_description">Location: ${fishLength.location}</p>
            </article>
        `
        }
    }

    return soldierFishHTML
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
     let regularFishHTML = ""

    for (const fishLength of database.fish) {
        if (fishLength.length % 3 != 0 && fishLength.length % 5 != 0) {
            regularFishHTML += `
            <article class="regular_fish">
                <img src="${fishLength.image}" alt="${fishLength.species} image" class="fish_image">
                <h3 class="location_name">${fishLength.name}</h3>
                <p class="location_species">Length: ${fishLength.length}</p>
                <p class="location_description">Location: ${fishLength.location}</p>
            </article>
        `
        }
    }

    return regularFishHTML
}