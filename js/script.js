/*
Consegna:
Data una lista della spesa (memorizzata in un array), 
stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi 
della lista individualmente con un ciclo while.
*/

//memorizzo la lista in un array
let shoppingList = ["Pane", "latte", "Acqua", "Pasta", "Uova", "Cioccolato"];

//prendo l'elemento html relativo alla lista in cui inserire poi gli elementi in pagina
let listEl = document.getElementById("list");

//inizializzo una variabile contatore a 0 per il ciclo while
let counter = 0;

while(counter < shoppingList.length){

    //creo elementi html li per ogni ciclo effettuato
    let listItemEl = document.createElement("li");

    //assegno agli elementi appena creati la classe item
    listItemEl.classList.add("item");

    //rendo figli di listEl (la lista ul in html) gli elementi li appena creati 
    listEl.append(listItemEl);

    //scrivo in pagina per ogni li item tramite la variabile counter l'elemento appartenente 
    // all'array shoppingList che viene "contato" ad ogni ciclo
    listItemEl.innerText = shoppingList[counter];
    
    //aumento il contatore per far si che la condizioni risulti falsa e si esca dal ciclo
    counter++
}


