import { database } from './aquariumData.js'


//Generate an HTML representation of each care tip
export const tipList = () => {
    
    let tipsHTML = ''

    for (const tip of database.tips) {
        tipsHTML += `
            <ul class="tips">
                <li class="tip">${tip.text}</li>
            </ul>
        `
    }

    return tipsHTML
}