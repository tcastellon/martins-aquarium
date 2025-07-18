import { database } from './aquariumData.js'

//Generate an HTML representation of each location
export const locationList = () => {
    let locationHTML = ''

    for (const location of database.location) {
        locationHTML += `
            <article class="location">
                <h3 class="location_name">${location.name}</h3>
                <p class="location_species">Country: ${location.country}}</p>
                <p class="location_description">Description: ${location.description}</p>
            </article>
        `
    }

    return locationHTML
}