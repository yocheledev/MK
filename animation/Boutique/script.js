const recupProducts = document.getElementById("produit")
let addPanier = document.querySelector(".addPanier")
fetch("products.json")
.then(response => response.json())
.then(data => {
    console.log(data)
    for (let i = 0; i <data["products"].length;i++){
        recupProducts.innerHTML += `<div class="card col" style="width: 18rem;"><img src="${data["products"][i]["img"]}" class="card-img-top" alt="..."><div class="card-body">
			<h5 class="card-title">${data["products"][i]["name"]}</h5><p class="card-text">${data["products"][i]["prix"]}</p>
			<a href="#" class="btn btn-primary">Ajouter au panier</a></div></div>`
        }
})
recupProducts.addEventListener("click", function() {
    console.log("envoi du produit")
})


