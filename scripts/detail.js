let containerDetail = document.getElementById('containerDetail')

const dataEvents = data.events;
console.log(location.search)
console.log(location.search.slice(4))

let idCapture = location.search.slice(4)
let renderCardDetail = ()=>{
    /* Tengo que arreglar los estilos de la card */
   
    dataEvents
    .filter(item => item._id == idCapture)
    .map(item => {
        containerDetail.innerHTML = `
    <div class="card mb-3 shadow" style="max-width: 640px; height: 155px">
    <div class="row g-0">
        <div class="col-md-4">
            <img src=${item.image} class="img-fluid rounded-start img-detail" alt=${item.name}>
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text"><small class="text-muted">${item.date}</small></p>
            </div>
        </div>
    </div>
</div>
    `
    })
    console.log(idCapture)
}

renderCardDetail()