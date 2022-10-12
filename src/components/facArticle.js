let facArticle = function(facility) {

    let element = document.createElement('article')
    element.classList.add('fac-article')
    
    element.innerHTML = `
        <img src="${facility.icon}" alt="icon" />
        <h1>${facility.headline}</h1>
        <p>${facility.text}</p>
    `
    
    return element
    }
    
    export default facArticle