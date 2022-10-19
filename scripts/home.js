const container = document.getElementById("container");
const containerCheckbox = document.getElementById('containerCheckbox')
const search = document.getElementById("inputPassword2")
const submitSearch = document.getElementById('submitSearch')

const dataEvents = data.events;



const renderCards = (arr) => {
    arr.map(item => {
        container.innerHTML += `
        <div class="col p-2">
        <div class="card shadow" style="width: 18rem;">
            <img src=${item.image} class="card-img-top size-img" alt="Feria de comidas">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text hiddem-description">${item.description}</p>
                <div class="d-flex justify-content-around">
                    <p class="card-title fw-bolder fs-4">$ ${item.price}</p>
                    <a href="/detail.html?id=${item._id}" class="btn btn-primary text-center">Read more</a>
                </div>
            </div>
        </div>
    </div>
        `
    })
}

renderCards(dataEvents)

const arrCategoryClean = new Set(dataEvents.map(item => item.category))

const arrClean = Array.from(arrCategoryClean)


const renderCheckbox = () => {

    arrClean.map(item => {
        containerCheckbox.innerHTML += `
        <div class="form-check form-check-inline p-3">
        <input class="form-check-input check" type="checkbox" value=${item} id=${item}>
        <label class="form-check-label" for=${item} >${item}</label>
        </div>
    `
    })



}
renderCheckbox()






let renderCategoryFilter = (value, stateChecked) => {

    if (stateChecked = 'true') {
        aux.push(dataEvents.filter(item => item.category.includes(value)))
        aux = dataEvents.filter(item => item.category.includes(value))
            .reduce((a, b) => a.concat(b) ,[])
        renderCards(aux)
        console.log(aux)
    } else if (stateChecked = 'false'){
        aux.filter(item => item !== value)
    }

}



let aux = []
containerCheckbox.addEventListener('click', function (e) {
    
    let categoryChecked = e.target.checked
    let valueEvent = e.target.value
    console.log()
    if (categoryChecked) {

        container.innerHTML = ''
        renderCategoryFilter(valueEvent, categoryChecked)
    }
    else {
        container.innerHTML = ''
        renderCards(dataEvents)
        console.log('not checked')
    }
})





const renderCardsFilterSearch = (value) => {
    dataEvents
        .filter(item => item.name.includes(value))
        .map(item => {
            container.innerHTML += `
        <div class="col p-2">
        <div class="card" style="width: 18rem;">
            <img src=${item.image} class="card-img-top size-img" alt="Feria de comidas">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text hiddem-description">${item.description}</p>
                <div class="d-flex justify-content-around">
                    <p class="card-title fw-bolder fs-4">$ ${item.price}</p>
                    <a href="/detail.html?id=${item._id}" class="btn btn-primary text-center">Read more</a>
                </div>
            </div>
        </div>
    </div>
        `
        })

}

const searchEvent = () => {
    search.addEventListener('keyup', function (e) {
        let valueSearch = e.target.value
        console.log(valueSearch)
        if (valueSearch.keyup = true) {
            container.innerHTML = ''
            renderCardsFilterSearch(valueSearch)
        } else {
            container.innerHTML = ''
            renderCards(dataEvents)
        }
    })
}

searchEvent()


// No me funcionó
const submitEvent = () =>{
    submitSearch.addEventListener('click', function(e){
        
        let valueSearch = e.value
        console.log(valueSearch)
        
            container.innerHTML = ''
            renderCardsFilterSearch(valueSearch)
            e.preventDefault()
    })
}

submitEvent()