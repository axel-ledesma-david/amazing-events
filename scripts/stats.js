const tBody = document.getElementById('tBody')
const tBody2 = document.getElementById('tBody2')
const tBody3 = document.getElementById('tBody3')

let apiAmazing = async () => {
    try {
        let api = await fetch('https://mh-amazing.herokuapp.com/amazing')
        let data = await api.json()
        let events = await data.events
        let currentDate = await data.date
        let upcoming = events.filter(ev => ev.date > currentDate)
        let past = events.filter(ev => ev.date < currentDate)

        /* const percentageAssistance = events.map(item => 100 * item.assistance / item.capacity)  */
        past.map(ev => {
            ev.percentage = (100 * ev.assistance) / ev.capacity
            ev.revenue = (ev.price * ev.assistance)
        })

        let pastForPercentage = [...past].sort((a, b) => a.percentage - b.percentage)
        let pastForCapacity = [...past].sort((a, b) => a.capacity - b.capacity)

        /*  let filterCategories = (dateEvent) => {
             let arrCategory = dateEvent.map(item => item.category)
 
             let cleanCategory = new Set(arrCategory)
 
             let arrCleanCategory = Array.from(cleanCategory)
             return arrCleanCategory
         } */


        filter(upcoming, 'estimate')
        filter(past, 'assistance')

        const renderTable1 = () => {
            return tBody.innerHTML += `
                    <tr>
                        <td>${pastForPercentage[pastForPercentage.length - 1].name}   ${pastForPercentage[pastForPercentage.length - 1].percentage.toFixed(1)}  </td>
                        <td>${pastForPercentage[0].name}   ${pastForPercentage[0].percentage.toFixed(1)}</td>

                        <td>${pastForCapacity[pastForCapacity.length - 1].name}   ${pastForCapacity[pastForCapacity.length - 1].capacity}</td>
                    </tr>
            `
        }

        renderTable1()


        function renderTableUpcoming(array) {

            array.map(element => {
                tBody2.innerHTML += `
                        <tr>
                            <td>${element.category}</td>
                            <td>${element.revenue}</td>
                            <td>${element.prom} </td>
                        </tr>
                `
            })
        }

        function renderTablePast(array) {
            array.map(item => {
                tBody3.innerHTML += `
                <tr>
                    <td>${item.category}</td>
                    <td>${item.revenue}</td>
                    <td>${item.prom} </td>
                </tr>
                `
            })
        }

        function filter(fechaEvento, propiedad) {
            fechaEvento.map(evento => { evento.revenue = evento[propiedad] * evento.price })
            let categories = Array.from(new Set(fechaEvento.map(evento => evento.category)))
            let stats = categories.map(cat => {
                let filter = fechaEvento.filter(evento => evento.category === cat)
                return acumulador(filter, propiedad)
            })
            renderTableUpcoming(stats)
            renderTablePast(stats)
        }

        function acumulador(array, propiedad) {
            let initialValue = {
                category: "",
                revenue: 0,
                capacity: 0,
                [propiedad]: 0
            }
            let stats = array.reduce((a, b) => {
                return {
                    category: b.category,
                    revenue: a.revenue + b.revenue,
                    capacity: a.capacity + b.capacity,
                    [propiedad]: a[propiedad] + b[propiedad] // el valor interno de la propiedad
                }
            }, initialValue)
            stats.prom = (100 * stats[propiedad] / stats.capacity).toFixed(0)
            return stats
        }


        /*  renderTableUpcoming(filterCategories(upcoming))
  */
    }
    catch (err) {
        console.log('error', err)
    }
}
apiAmazing()

