

const containerCheckbox = document.getElementById('containerCheckbox')
const search = document.getElementById("inputPassword2")
const submitSearch = document.getElementById('submitSearch')
const containerUpcoming = document.getElementById("containerUpcoming");

const dataEvents = data.events;
const currentDate = data.currentDate
let arrayFilterUpcoming = dataEvents.filter(item => item.date > currentDate)

    const renderCardsUpcoming = (arr)=>{
        arr.map(item => {
            containerUpcoming.innerHTML += `
            <div class="col p-2">
            <div class="card" style="width: 18rem;">
                <img src=${item.image} class="card-img-top size-img" alt="Feria de comidas">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text hiddem-description">${item.description}</p>
                    <div class="d-flex justify-content-around">
                        <p class="card-title fw-bolder fs-4">$ ${item.price}</p>
                        <a href="/detail.html?id=${item._id} " class="btn btn-primary text-center">Read more</a>
                    </div>
                </div>
            </div>
        </div>
            `
        })
    }

renderCardsUpcoming(arrayFilterUpcoming)



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
        aux.push(arrayFilterUpcoming.filter(item => item.category.includes(value)))
        aux = arrayFilterUpcoming.filter(item => item.category.includes(value))
            .reduce((a, b) => a.concat(b) ,[])
            renderCardsUpcoming(aux)
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

        containerUpcoming.innerHTML = ''
        renderCategoryFilter(valueEvent, categoryChecked)
    }
    else {
        containerUpcoming.innerHTML = ''
        renderCardsUpcoming(arrayFilterUpcoming)
        console.log('not checked')
    }
})

const renderCardsFilterSearch = (value) => {
    arrayFilterUpcoming
        .filter(item => item.name.includes(value))
        .map(item => {
            containerUpcoming.innerHTML += `
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
            containerUpcoming.innerHTML = ''
            renderCardsFilterSearch(valueSearch)
        } else {
            containerPast.innerHTML = ''
            renderCardsUpcoming(dataEvents)
        }
    })
}

searchEvent()