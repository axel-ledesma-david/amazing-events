const container = document.getElementById("container");
const containerCheckbox = document.getElementById('containerCheckbox')
const search = document.getElementById("inputPassword2")
const submitSearch = document.getElementById('submitSearch')

const dataEvents = data.events;

const renderAllCards = () => {
    dataEvents.map(item => {
        container.innerHTML += `
        <div class="col p-2">
        <div class="card shadow" style="width: 18rem;">
            <img src=${item.image} class="card-img-top size-img" alt="Feria de comidas">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text hiddem-description">${item.description}</p>
                <div class="d-flex justify-content-around">
                    <p class="card-title fw-bolder fs-4">$ ${item.price}</p>
                    <a href="#" class="btn btn-primary text-center">Read more</a>
                </div>
            </div>
        </div>
    </div>
        `
    })
}

renderAllCards()

const arrCategoryClean = new Set(dataEvents.map(item => item.category))

const arrClean = Array.from(arrCategoryClean)

console.log(arrClean)

let arrValue = []
// 
const renderCheckbox = () => {

    for (let item of arrClean) {
        containerCheckbox.innerHTML += `
        <div class="form-check form-check-inline p-3">
        <input class="form-check-input" type="checkbox" value=${item}>
        <label class="form-check-label">${item}</label>
        </div>
    `
        console.log(item)
    }
}
renderCheckbox()

let renderCategoryFilter = (value) => {
    dataEvents
        .filter(item => item.category.includes(value))
        .map(item => {
            return container.innerHTML += `
        <div class="col p-2">
        <div class="card" style="width: 18rem;">
            <img src=${item.image} class="card-img-top size-img" alt="Feria de comidas">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text hiddem-description">${item.description}</p>
                <div class="d-flex justify-content-around">
                    <p class="card-title fw-bolder fs-4">$ ${item.price}</p>
                    <a href="#" class="btn btn-primary text-center">Read more</a>
                </div>
            </div>
        </div>
    </div>
        `
        })


}

containerCheckbox.addEventListener('click', function (e) {

    let valueEvent = e.target.value
    if (valueEvent.checked = true) {
        container.innerHTML = ''
        renderCategoryFilter(valueEvent)
        console.log(valueEvent)
        console.log(typeof (valueEvent))
        console.log('checked')
    } else {
        container.innerHTML = ''
        renderAllCards()
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
                    <a href="#" class="btn btn-primary text-center">Read more</a>
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
            renderAllCards()
        }
    })
}

searchEvent()


/* 
const submitEvent = () =>{
    submitSearch.addEventListener('submit', function(e){
        let valueSearch = e.target.value
        console.log(valueSearch)
        if (valueSearch.keyup = true) {
            container.innerHTML = ''
            renderCardsFilterSearch(valueSearch)
        } else {
            container.innerHTML = ''
            renderAllCards()
        }
    })
}

submitEvent() */