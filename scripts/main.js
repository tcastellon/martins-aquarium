import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// Generate fish list
const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

//Generate the location list
const locationHTML = locationList()

//Render each HTML string to the correct DOM element
const renderFishToDOM = (fishHTML) => {
    const fishList = document.getElementById('fishList')

    if (fishList) {
        fishList.innerHTML = fishHTML
    } else {
        console.error('Could not find element with id "fishList"')
    }
}

const renderTipsToDom = (tipHTML) => {
    const tipsList = document.getElementById('tipList')

    if (tipsList) {
        tipsList.innerHTML = tipHTML
    } else {
        console.error('Could not find element with id "tipList"')
    }
}

const renderLocationToDom = (locationHTML) => {
    const locationsList = document.getElementById('locationList')

    if (locationsList) {
        locationsList.innerHTML = locationHTML
    } else {
        console.error('Could not find element with id "locationList"')
    }
}


renderFishToDOM(fishHTML)
renderTipsToDom(tipHTML)
renderLocationToDom(locationHTML)