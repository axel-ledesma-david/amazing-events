const container = document.getElementById("container");

const dataEvents = data.events;

const renderAllCards = () => {
    dataEvents.map(item => {
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

renderAllCards()

const renderCategoryFilter = category => {
    dataEvents
        .filter(item => item.category === category)
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

/* const filterCategory = category => dataEvents.filter(item => item.category === category) */



const onClickFilter = (category, CategoryString)=>{
    //let arrConcat = []
  if (category.checked) {
        container.innerHTML = ''
        renderCategoryFilter(CategoryString)
    } else {
        container.innerHTML = ''
        renderAllCards()
    }
}


const foodFair = document.getElementById("inlineCheckbox1")
foodFair.addEventListener('click', function () {
    onClickFilter(foodFair, "Food Fair")
})

const museum = document.getElementById("inlineCheckbox2")
museum.addEventListener('click', function () {
    onClickFilter(museum, "Museum")
})

const costumeParty = document.getElementById("inlineCheckbox3")
costumeParty.addEventListener('click', function () {
    onClickFilter(costumeParty, "Costume Party")
})

const musicConcert = document.getElementById("inlineCheckbox4")
musicConcert.addEventListener('click', function () {
    onClickFilter(musicConcert, "Music Concert")
})

const race = document.getElementById("inlineCheckbox5")
race.addEventListener('click', function () {
    onClickFilter(race, "Race")
})

const bookExchange = document.getElementById("inlineCheckbox6")
bookExchange.addEventListener('click', function () {
    onClickFilter(bookExchange, "Book Exchange")
})

const cinema = document.getElementById("inlineCheckbox7")
cinema.addEventListener('click', function () {
    onClickFilter(cinema, "Cinema")
})

const search = document.getElementById("inputPassword2")

const renderCardsFilterSearch = (value)=>{
  /*   dataEvents
    .filter(item => item.category === value)
    .map(renderAllCards) */
    renderAllCards()
        
}

const searchEvent = ()=>{
    search.addEventListener('change', function(event){
        console.log(event.target.value)
        renderCategoryFilter(event.target.value)
    })
}

searchEvent()
