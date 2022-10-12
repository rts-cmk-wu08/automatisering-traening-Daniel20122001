let serArticle = function(service) {

    let element = document.createElement('article')
    element.classList.add('ser-article')
    
    element.innerHTML = `
        <img src="${service.icon}" alt="icon" />
        <h1>${service.headline}</h1>
        <p>${service.text}</p>
    `
    
    return element
    }
    
    export default serArticle