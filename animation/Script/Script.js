// // script.js
// const recupProducts = document.getElementById("produits")
// fetch("products.json")
// .then(response => response.json())
// .then(data => {
//     for (let i = 0; i <data["products"].length;i++){
//         console.log(i)
//         recupProducts.innerHTML += `<div class="produit"><div class="card" style="width: 18rem;"><img src="../2.jpg" class="card-img-top" alt="...">
//         <div class="card-body"><h5 class="card-title">${data["products"][i]["name"]}</h5><button class="ajouter-panier btn btn-primary"data-id="1"data-nom="Produit 1" data-prix="20">Ajouter au Panier</button>
//         </div></div></div>`
//     }
// })

// // Récupérer les éléments du DOM
// const ajouterPanierButtons = document.querySelectorAll('.ajouter-panier');
// const panierBtn = document.getElementById('panier-btn');
// const panierModal = document.getElementById('panier-modal');
// const closeModal = document.querySelector('.close');
// const panierCount = document.getElementById('panier-count');
// const panierTableBody = document.querySelector('#panier-table tbody');
// const totalGeneral = document.getElementById('total-general');
// const checkoutBtn = document.getElementById('checkout-btn');

// // Initialiser le panier à partir du localStorage ou vide
// let panier = JSON.parse(localStorage.getItem('panier')) || [];

// // Fonction pour mettre à jour le localStorage et l'affichage du panier
// function mettreAJourPanier() {
//     // Mettre à jour le localStorage
//     localStorage.setItem('panier', JSON.stringify(panier));

//     // Mettre à jour le compteur du panier
//     const totalItems = panier.reduce((acc, produit) => acc + produit.quantite, 0);
//     panierCount.textContent = totalItems;

//     // Mettre à jour le contenu du panier modal
//     panierTableBody.innerHTML = '';
//     let total = 0;
//     panier.forEach(produit => {
//         const row = document.createElement('tr');

//         const nomCell = document.createElement('td');
//         nomCell.textContent = produit.nom;
//         row.appendChild(nomCell);

//         const prixCell = document.createElement('td');
//         prixCell.textContent = `${produit.prix}€`;
//         row.appendChild(prixCell);

//         const quantiteCell = document.createElement('td');
//         quantiteCell.textContent = produit.quantite;
//         row.appendChild(quantiteCell);

//         const totalCell = document.createElement('td');
//         const totalProduit = produit.prix * produit.quantite;
//         totalCell.textContent = `${totalProduit}€`;
//         row.appendChild(totalCell);

//         const actionCell = document.createElement('td');
//         const removeBtn = document.createElement('button');
//         removeBtn.textContent = 'Supprimer';
//         removeBtn.classList.add('remove-btn');
//         removeBtn.dataset.id = produit.id;
//         actionCell.appendChild(removeBtn);
//         row.appendChild(actionCell);

//         panierTableBody.appendChild(row);

//         total += totalProduit;
//     });
//     totalGeneral.textContent = `${total}€`;

//     // Ajouter les écouteurs pour les boutons de suppression
//     document.querySelectorAll('.remove-btn').forEach(btn => {
//         btn.addEventListener('click', supprimerProduit);
//     });
// }

// // Fonction pour ajouter un produit au panier
// function ajouterAuPanier(event) {
//     const button = event.target;
//     const id = button.dataset.id;
//     const nom = button.dataset.nom;
//     const prix = parseFloat(button.dataset.prix);

//     // Vérifier si le produit est déjà dans le panier
//     const existingProduit = panier.find(produit => produit.id === id);
//     if (existingProduit) {
//         existingProduit.quantite += 1;
//     } else {
//         panier.push({ id, nom, prix, quantite: 1 });
//     }

//     mettreAJourPanier();
// }

// // Fonction pour supprimer un produit du panier
// function supprimerProduit(event) {
//     const id = event.target.dataset.id;
//     panier = panier.filter(produit => produit.id !== id);
//     mettreAJourPanier();
// }

// // Écouter les clics sur les boutons "Ajouter au Panier"
// ajouterPanierButtons.forEach(button => {
//     button.addEventListener('click', ajouterAuPanier);
// });

// // Écouter les clics sur le bouton du panier pour ouvrir le modal
// panierBtn.addEventListener('click', () => {
//     panierModal.style.display = 'block';
// });

// // Écouter les clics sur le bouton de fermeture du modal
// closeModal.addEventListener('click', () => {
//     panierModal.style.display = 'none';
// });

// // Fermer le modal si l'utilisateur clique en dehors de celui-ci
// window.addEventListener('click', (event) => {
//     if (event.target === panierModal) {
//         panierModal.style.display = 'none';
//     }
// });

// // Gérer le passage à la commande
// checkoutBtn.addEventListener('click', () => {
//     if (panier.length === 0) {
//         alert('Votre panier est vide.');
//         return;
//     }
//     // Ici, tu peux rediriger vers une page de commande ou envoyer les données au backend
//     // Par exemple :
//     // window.location.href = '/commande.html';
//     envoyerCommande();
// });

// // Fonction pour envoyer la commande au backend
// function envoyerCommande() {
//     fetch('/api/commande', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ panier })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             alert('Commande passée avec succès !');
//             panier = [];
//             mettreAJourPanier();
//         } else {
//             alert('Erreur lors de la commande. Veuillez réessayer.');
//         }
//     })
//     .catch(error => {
//         console.error('Erreur:', error);
//         alert('Erreur lors de la commande. Veuillez réessayer.');
//     });
// }

// // Initialiser le panier au chargement de la page
// mettreAJourPanier();
