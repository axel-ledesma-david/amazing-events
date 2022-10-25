const container = document.getElementById("container");

const containerCheckbox = document.getElementById('containerCheckbox')
const search = document.getElementById("inputPassword2")
const submitSearch = document.getElementById('submitSearch')


// <a href="/detail.html?id=${item._id}" class="btn btn-primary text-center">Read more</a>
// 


const apiAmazing = async () => {
    try {
        let api = await fetch('https://mh-amazing.herokuapp.com/amazing')
        let data = await api.json()
        console.log(data)
        let events = await data.events
        console.log('Events: ', events)

        // Funcion que imprime las tarjetas

        const renderCards = (arr) => {
            arr.map(item => {
                container.innerHTML += `
            <div class="col p-2">
            <div class="card shadow rounded-0" style="width: 18rem;">
                <img src=${item.image} class="card-img-top size-img rounded-0" alt="Feria de comidas">
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


        renderCards(events)

        // Se filtra por categoria y se quitan los valores repetidos

        const arrCategoryClean = new Set(events.map(item => item.category))

        const arrClean = Array.from(arrCategoryClean)

        // funcion que renderiza los checkbox
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

        let categoryFilterRemove = (value) => {

          
            newAux = events.filter(item => {
                return item.category.includes(!value)
            })
           


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
                    container.innerHTML = ''
                    categoryFilter(valueEvent)
                    renderCards(newAux)
                    console.log(newAux)

                } else if (!checkFiltered) {
                    categoryFilterRemove(valueEvent)
                    renderCards(newAux)
                }


            }
            )
        })
        const renderCardsFilterSearch = (value) => {
            events
                .filter(item => item.name.toLowerCase().includes(value) || item.name.includes(value))
                .map(item => {
                    container.innerHTML += `
                <div class="col p-2">
                <div class="card shadow" style="width: 18rem;">
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

        const searchEvent = () => {
            search.addEventListener('keyup', function (e) {
                let valueSearch = e.target.value
                console.log(valueSearch)
                if (valueSearch.keyup = true) {
                    container.innerHTML = ''
                    renderCardsFilterSearch(valueSearch)
                } else {
                    container.innerHTML = ''
                    renderCards(events)
                }
            })
        }

        searchEvent()

    } catch (err) {
        console.log(err)
        container.innerHTML = `
            <h2> Disculpá rey, se cayó la api </h2>
        `
    }
}

apiAmazing()







/* let aux = [] */
let newAux = []
/* let arrConcat = [] */













