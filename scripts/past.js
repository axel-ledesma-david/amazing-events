const containerPast = document.getElementById("containerPast");
const containerCheckbox = document.getElementById('containerCheckbox')
const search = document.getElementById("inputPassword")
const submitSearch = document.getElementById('submitSearch')
const dataEvents = data.events;

const currentDate = data.currentDate

let arrayFilterPast = dataEvents.filter(item => item.date < currentDate)
const renderCardsPastEvent = (arr) => {
    arr.map(item => {
         containerPast.innerHTML += `
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


renderCardsPastEvent(arrayFilterPast)

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

let aux = []

let renderCategoryFilter = (value, stateChecked) => {

    if (stateChecked = 'true') {
        aux.push(arrayFilterPast.filter(item => item.category.includes(value)))
        aux = arrayFilterPast.filter(item => item.category.includes(value))
            .reduce((a, b) => a.concat(b) ,[])
            renderCardsPastEvent(aux)
        console.log(aux)
    } else if (stateChecked = 'false'){
        aux.filter(item => item !== value)
    }

}

containerCheckbox.addEventListener('click', function (e) {
    
    let categoryChecked = e.target.checked
    let valueEvent = e.target.value
    console.log()
    if (categoryChecked) {

        containerPast.innerHTML = ''
        renderCategoryFilter(valueEvent, categoryChecked)
    }
    else {
        containerPast.innerHTML = ''
        renderCardsPastEvent(arrayFilterPast)
        console.log('not checked')
    }
})

const renderCardsFilterSearch = (value) => {
    arrayFilterPast
        .filter(item => item.name.includes(value))
        .map(item => {
            containerPast.innerHTML += `
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
            containerPast.innerHTML = ''
            renderCardsFilterSearch(valueSearch)
        } else {
            containerPast.innerHTML = ''
            renderCardsPastEvent(dataEvents)
        }
    })
}

searchEvent()
