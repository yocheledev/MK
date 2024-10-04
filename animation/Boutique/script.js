//récupération des balises HTML//
const displayProducts = document.querySelector(".products")
const panier = document.querySelector(".panier")
const buttonProduct = document.getElementsByClassName("buttonProduct")
const container_price = document.querySelector(".container-price")
const removeProductPanier = document.getElementsByClassName("removeProductPanier")
const addNumer = document.querySelector("#addNumber")



// Base de de données des produits //
const arrayProducts = [
    {
        id:1,
        name:"produit1",
        price:20,
        quantite:5,
        images:"./images/ps_sc61168_white-red.jpg"
    },
    {
        id:2,
        name:"produit2",
        price:50,
        quantite:15,
        images:"./images/ps_sc61168_white-red.jpg"
    },
    {
        id:3,
        name:"produit3",
        price:100,
        quantite:25,
        images:"./images/ps_sc61168_white-red.jpg"
    },
    {
        id:4,
        name:"produit4",
        price:30,
        quantite:40,
        images:"./images/ps_sc61168_white-red.jpg"
    },
]

let initValue = 0 // Le prix total du panier initialisé à 0 //
let valuePanier = 0 // le nombre d'élements dans le panier initialisé à 0 //

// Affichage des produits sur la page //
display(arrayProducts)


// Ajout des produits dans le panier //
for (let i=0;buttonProduct.length>i;i++){
    buttonProduct[i].addEventListener("click", function(){
        valuePanier++
        addNumer.innerHTML = valuePanier
        
        let title = document.getElementsByClassName("title-product")[i].innerHTML
        let price = document.getElementsByClassName("price-product")[i].innerHTML
       
        panier.innerHTML += `<div class="card"><div class="card-body">
               <h5 class="card-title all-titles">${title}</h5><p class="card-text">
               Prix: <span class="del_price">${price}</span> €</p>
               <p class="card-text">Quantité: </p></div>
               <button class="btn btn-primary removeProductPanier">Supprimer</button>`
       
        let totalPrice = initValue += parseInt(price)
        container_price.innerHTML = `<p class="text-center">Total: ${totalPrice} €</p>`
       
        // Suppresion des produits dans le panier //
        for (let a=0;removeProductPanier.length>a;a++){
            let del_price = document.getElementsByClassName("del_price")[a].innerHTML
            removeProductPanier[a].addEventListener("click",function(event){
                valuePanier--
                addNumer.innerHTML = valuePanier
                totalPrice = totalPrice -= parseInt(del_price)
                initValue -= parseInt(del_price)
                container_price.innerHTML = `<p class="text-center">Total: ${totalPrice} €</p>`
                event.target.parentElement.remove()
            })
        }
    })
}

// Création de la fonction d'affichage des produits //
function display(product){
    for (let i of product){
        displayProducts.innerHTML += `<div class="card col" style="width: 18rem;">
            <img src="${i["images"]}" class="card-img-top" alt="..."><div class="card-body">
            <h5 class="card-title title-product">${i["name"]}</h5>
            <p class="card-text">Prix: <span class="price-product">${i["price"]}</span>€</p>
            <button class="btn btn-primary buttonProduct">Ajouter au panier</button></div></div>`
    }
}



