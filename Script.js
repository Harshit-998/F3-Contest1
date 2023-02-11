fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    let primeData = data.products;
    let card = document.getElementById("card"); // this stores the main div element where we gonaa display our cards

    // to loop over a primeData array of objects
    for (let i = 0; i < primeData.length; i++) {
      const element = primeData[i];

      let brandd = element.brand;
      let titlee = element.title;
      let descriptionn = element.description;
      let pricee = element.price;

      let stockk = element.stock;
      let ratingg = element.rating;
      let imageArr = element.images;
      let imagee = imageArr[0];

      let spann = document.createElement("span");

      spann.innerHTML = `<div class="card border border-dark border-3 border-opacity-25" style="width: 18rem;">
    <img src="${imagee}" width="100%" height="180" class="card-img-top" alt="no image available">
  
    <div class="card-body">
      <h3 class="card-title">${brandd}</h3>
      <br>
      
      
      <p class="card-text text-capitalize"> <b>Title:</b> ${titlee}</p>
      <p class="card-text text-capitalize"> <b>Description:</b> ${descriptionn}</p>
      <p class="card-text text-capitalize"> <b>$:</b> ${pricee}</p>
      
      <p> <span class=""><b>Rating:</b> ${ratingg}</span></p>
      <p class=""> ${stockk} items remaining</p>
    </div>
  </div>`;
      card.appendChild(spann);
    }

    console.log(primeData);
  });
