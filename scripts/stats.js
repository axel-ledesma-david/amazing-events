const tBody = document.getElementById('tBody')
const tBody2 = document.getElementById('tBody2')

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

        let filterCategories = (dateEvent) => {
            let arrCategory = dateEvent.map(item => item.category)

            let cleanCategory = new Set(arrCategory)

            let arrCleanCategory = Array.from(cleanCategory)
            return arrCleanCategory
        }

        let objectProps = {
            assistance: 0,
            gain: 0,
            capacity: 0,
            [property]: 0

        }

        let acum = (dateEvent, prop) => {
            
            let capacity = dateEvent.reduce((a, b) => { return a.capacity + b.capacity }, objectProps)
            let property = dateEvent.reduce((a, b) => { return a.prop + b.prop }, objectProps)


            if (dateEvent.category === filterCategories(dateEvent)) {
                objectProps = {
                    assistance: sumaAssis,
                    gain: sumaGain,
                    capacity,
                    [property]: property
                }

            }
        }

        /* console.log('set array   :', arrCleanCategory) */


        const renderTable1 = () => {
            return tBody.innerHTML += `
        <tbody>
            <tr>
                <td>${pastForPercentage[pastForPercentage.length - 1].name}   ${pastForPercentage[pastForPercentage.length - 1].percentage.toFixed(1)}  </td>
                <td>${pastForPercentage[0].name}   ${pastForPercentage[0].percentage.toFixed(1)}</td>

                <td>${pastForCapacity[pastForCapacity.length - 1].name}   ${pastForCapacity[pastForCapacity.length - 1].capacity}</td>
            </tr>
        </tbody>
    `
        }

        renderTable1()

        let renderTableUpcoming = () => {
            dateEvent(upcoming)
            let sumaAssis = dateEvent.reduce((a, b) => { return a.assistance + b.assistance }, objectProps)
            let sumaGain = dateEvent.reduce((a, b) => { return a.revenue + b.revenue }, objectProps)
            filterCategories(upcoming).map(element => {

                tBody2.innerHTML += `
                <tbody>
                    <tr>
                        <td>${element}</td>
                        <td>${sumaGain}</td>
        
                        <td>${pastForCapacity[pastForCapacity.length - 1].name}   ${pastForCapacity[pastForCapacity.length - 1].capacity}</td>
                    </tr>
                </tbody>
            `
            })
        }
        renderTableUpcoming(filterCategories(upcoming))

    }
    catch (err) {
        console.log('error', err)
    }
}
apiAmazing()

