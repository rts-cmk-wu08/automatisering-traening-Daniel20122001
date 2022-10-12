import facSection from "./facSection.js"
import "./section.scss"

let section = function() {

let element = document.createElement('section')
element.classList.add("headingFacSection")

element.innerHTML = `
    <h1>Making your facility known is our priority</h1>
`

element.append(facSection())

return element
}

export default section