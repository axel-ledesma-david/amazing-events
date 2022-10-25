let containerDetail = document.getElementById('containerDetail')


let apiAmazing = async () => {

    try {
        let api = await fetch('https://mind-hub.up.railway.app/amazing')
        let data = await api.json()
        let events = await data.events
        console.log(location.search)

        let idCapture = location.search.slice(4)
        let renderCardDetail = () => {


            events
                .filter(item => item.id == idCapture)
                .map(item => {
                    containerDetail.innerHTML = `
    <div class="card mb-3 shadow d-flex flex-row" style="width: 700px; height: 300px">
    
        <div class="col-md-4">
            <img src=${item.image} class=" rounded-start img-detail" alt=${item.name}>
        </div>
        
            <div class="card-body p-4">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text"><b>Assistance: </b> ${item.assistance}</p>
                <p class="card-text"><b>Place: </b>  ${item.place}</p>
                <p class="card-text"><b>Price: </b>  $${item.price}</p>
                <p class="card-text"><small class="text-muted"><b class="text-black">Date: </b>  ${item.date}</small></p>
            </div>
        
    
</div>
    `
                })
            console.log(idCapture)
        }

        renderCardDetail()
    } catch (error) {

    }
}

apiAmazing()



