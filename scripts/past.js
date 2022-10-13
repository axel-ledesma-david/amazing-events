const container = document.getElementById("containerPast");

const dataEvents = data.events;

for (const card of dataEvents) {
   if (card.date < data.currentDate) {
    container.innerHTML += `
    <div class="col p-2">
    <div class="card" style="width: 18rem;">
        <img src=${card.image} class="card-img-top size-img" alt="Feria de comidas">
        <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text hiddem-description">${card.description}</p>
            <div class="d-flex justify-content-around">
                <p class="card-title fw-bolder fs-4">$ ${card.price}</p>
                <a href="#" class="btn btn-primary text-center">Read more</a>
            </div>
        </div>
    </div>
</div>
    `
   }
}