const containerPast = document.getElementById("containerPast");
const containerCheckbox = document.getElementById('containerCheckbox')
const search = document.getElementById("inputPassword")
const submitSearch = document.getElementById('submitSearch')

/* const currentDate = data.currentDate */

let apiAmazing = async () => {
    try {
        // Consumo la api de amazing
        let api = await fetch('https://mh-amazing.herokuapp.com/amazing')
        let data = await api.json()
        let events = await data.events
        let currentDate = await data.date

        // Filtro segun fecha
        let arrayFilterPast = events.filter(item => item.date < currentDate)
        renderCardsPastEvent(arrayFilterPast)


        const arrCategoryClean = new Set(arrayFilterPast.map(item => item.category))

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

        let categoryFilter = (value) => {

            let aux = events.filter(item => {
                return item.category.includes(value)
            })

            /* console.log('aux' , aux) */

            newAux = newAux.concat(aux)

         
        }

        const checkbox = document.querySelectorAll('input[type="checkbox"]')

        let checkboxList = Array.from(checkbox)

        checkboxList.forEach(check => {
            check.addEventListener('click', function (e) {
                let checkFiltered = checkboxList.filter(checkItem => checkItem.checked)

                console.log(checkFiltered)

                /*  let categoryChecked = e.target.checked */

                let valueEvent = e.target.value
                if (checkFiltered) {
                    containerPast.innerHTML = ''
                    categoryFilter(valueEvent)
                    renderCardsPastEvent(newAux)
                    console.log(newAux)

                }
            }
            )
        })

        const renderCardsFilterSearch = (value) => {
            arrayFilterPast
                .filter(item => item.name.includes(value))
                .map(item => {
                    containerPast.innerHTML += `
        <div class="col p-2">
        <div class="card shadow rounded-0" style="width: 18rem;">
            <img src=${item.image} class="card-img-top size-img" alt="Feria de comidas">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text hiddem-description">${item.description}</p>
                <div class="d-flex justify-content-around">
                    <p class="card-title fw-bolder fs-4">$ ${item.price}</p>
                    <a href="/detail.html?id=${item.id}" class="btn-vanila">Read more</a>
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
                    renderCardsPastEvent(events)
                }
            })
        }

        

        searchEvent()

    } catch (err) {
        console.log(err)
    }

}

apiAmazing()
const renderCardsPastEvent = (arr) => {
    arr.map(item => {
        containerPast.innerHTML += `
    <div class="col p-2">
        <div class="card shadow rounded-0" style="width: 18rem;">
            <img src=${item.image} class="card-img-top size-img" alt="Feria de comidas">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text hidden-description">${item.description}</p>
                <div class="d-flex justify-content-around">
                    <p class="card-title fw-bolder fs-4">$ ${item.price}</p>
                    <a href="/detail.html?id=${item.id}" class="btn-vanila">Read more</a>
                </div>
            </div>
        </div>
    </div>
    `
    })
}





let newAux = []




