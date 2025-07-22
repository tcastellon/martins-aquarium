import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { mostHolyFish, soldierFish, regularFish } from './holyFish.js'

// Generate fish list
const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

//Generate the location list
const locationHTML = locationList()

//Generate list with most holy, soldier, and regular fish 
const holy = mostHolyFish()
const soldier = soldierFish()
const regular = regularFish()
const holyHTML = holy + soldier + regular

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

const renderHolyToDOM = (holyHTML) => {
    const holyList = document.getElementById('holy_list')

    if (holyList) {
        holyList.innerHTML = holyHTML
    } else {
        console.error('Could not find element with id "holy_list"')
    } 
}

renderFishToDOM(fishHTML)
renderTipsToDom(tipHTML)
renderLocationToDom(locationHTML)
renderHolyToDOM(holyHTML)