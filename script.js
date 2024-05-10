
document.addEventListener('DOMContentLoaded', function(){
    let btn = document.getElementById("livre");
    document.getElementById("ajouter").addEventListener('click', function(){
        let input1 = document.getElementById("titre").value="";
        let input2 = document.getElementById("auteur").value="";

        // Ajouter le livre à la liste
  ajouterLivre(titre, auteur);

        function ajouterLivre(title, author) {
            const book = document.createElement("ul");
            book.classList.add("livre");
            book.setAttribute("data-id", livreId)
        }
    }
    
    )
    const titre = document.getElementById("titre");
    titre.textContent = "Titre: " + titre;
  
    const auteur = document.getElementById("auteur");
    auteur.textContent = "Auteur: " + auteur;
  
    const btnL = document.createElement("button");
    btnL.textContent = "Lu";
    btnL.onclick = function() {
      // Marquer comme lu
      markLu(livre);
    }

    
    
    

const btnS = document.createElement("button");
btnS.textContent = "Supprimer";
btnS.onclick = function() {
    // Supprimer le livre
    suppLivre(book);
  }



  livre.appendChild(titre);
  livre.appendChild(auteur);
  livre.appendChild(btnL);
  livre.appendChild(btnS);


  mesLivres.appendChild(livre);

  livreId++;


function markLu(book) {
  // Mettre en surbrillance pour marquer comme lu
  book.style.backgroundColor = "#cfc";
}

function deleteBook(book) {
  // Supprimer le livre de la liste
  mesLivres.suppEnf(book);
})
