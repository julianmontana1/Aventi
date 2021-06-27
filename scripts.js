var contenido = document.querySelector('#contenido')

function info() {
    fetch('data.json')
        .then(res => res.json())
        .then(datos => {
            console.log(datos)
            data(datos)
        })
}

function lenguajes(lenguajes) {
    return `
    ${lenguajes.map(lenguaje => `<span>${lenguaje}</span>`).join("")}
    `;
    }

function data(datos) {
    // console.log(datos)
    contenido.innerHTML = ''
    for(let valor of datos){
        // console.log(valor.nombre)
        contenido.innerHTML += `
    
    <div class="job ${ valor.featured ? "featuredjob" : " " }" > 
        <div class="title half">
        <div class="companylogo">
            <img class="logo" src="${ valor.logo }"/>
        </div>
        <div class="topinfo">
        <span class="company">${ valor.company }</span>
        <span class="${ valor.new ? "new" : "oculto" }">NEW!</span>
        <span class="${ valor.featured ? "featured" : "oculto" }">FEATURED</span>
        </div>

        <div class="bottominfo">
            <span class="position">${valor.position}</span>
            <div class="bottomtags">
                <span>${valor.postedAt}</span><span>•</span><span>${valor.contract}</span><span>•</span><span>${valor.location}</span>
            </div>
        </div>          
        </div>
        <div class="tags half">
        <span>${ valor.role } </span>
        <span>${ valor.level } </span>
        ${valor.languages ? lenguajes(valor.languages) : ""}	
                
        </div>
    </div>
        
        `
    }
}