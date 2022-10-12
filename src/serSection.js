import { services } from "../data.js"
import serArticle from "./serArticle.js"
import "./serSection.scss"

console.log(services)
let serSection = function() {

let element = document.createElement('div')
element.classList.add('services')

services.forEach(service => {

    element.append(serArticle(service))

})


return element
}

export default serSection