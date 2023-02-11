fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    let items = data.products;
    let card = document.getElementById("card"); // Store main div, and here we store our data

    for (let i = 0; i < items.length; i++) {
      const element = items[i];

      let brandd = element.brand;
      let titlee = element.title;
      let descriptionn = element.description;
      let pricee = element.price;

      let stockk = element.stock;
      let ratingg = element.rating;
      let imageArr = element.images;
      let imagee = imageArr[0];

      let spann = document.createElement("span");

      // How we want to change the inner html of our page according to our data that we get
      spann.innerHTML = `<div class="card border border-dark border-2 border-opacity-100" style="width: 18rem;">
    <img src="${imagee}" width="100%" height="200px" class="card-img-top" alt="no image available">
  
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

    console.log(items);
  });
