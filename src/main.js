import data from './data/pokemon/pokemon.js';
import {filterData} from './data.js';

//Creacion de tarjetas index
for (let i = 0; i < data.pokemon.length; i++) {    
    //variable para crear tarjeta
    let pokeCards = document.createElement("div");
    pokeCards.className = "pokeCards";
    pokeCards.id = "pokeCards";   

    //variable para crear nombre pokemon
    let pokeName = document.createElement("h3");
    pokeName.textContent = data.pokemon[i].name;

    //variable para craer imagen pokemon
    let image = document.createElement("img");
    image.src = data.pokemon[i].img;

    //variable número pokemon
    let pokeNumber = document.createElement("h4");
    pokeNumber.textContent = "#" + data.pokemon[i].num;
    pokeNumber.className = "number";

    //Creando tipo de pokemon primer tipo
    let pokeType = document.createElement("p");
    pokeType.textContent = data.pokemon[i].type[0];
    pokeType.className = "type";

    //Creando tipo de pokemon segundo tipo
    let pokeType2 = document.createElement("p");
    pokeType2.className = "type2";
    pokeType2.textContent = data.pokemon[i].type[1];

    //Dando valor a variables
    pokeCards.appendChild(pokeName);
    pokeCards.appendChild(image);
    pokeCards.appendChild(pokeNumber);
    pokeCards.appendChild(pokeType);
    pokeCards.appendChild(pokeType2);

    //Mostrar tarjeta en HTLM section
    document.getElementById("pokedex").appendChild(pokeCards).innerHTML;        
}

//seleccionar ordenar por alfabeto o numero
const selectOrder = document.getElementById("order");
selectOrder.addEventListener("change", ()=>{
    let selectedOrder = filterData(selectOrder);
    
    document.getElementById("pokedex").innerHTML="";

    for (let i = 0; i < selectedOrder.length; i++) { 
        let pokeCards = document.createElement("div");
        pokeCards.className = "pokeCards";
        pokeCards.id = "pokeCards";   
    
        //variable para crear nombre pokemon
        let pokeName = document.createElement("h3");
        pokeName.textContent = selectedOrder[i].name;
    
        //variable para craer imagen pokemon
        let image = document.createElement("img");
        image.src = selectedOrder[i].img;
    
        //variable número pokemon
        let pokeNumber = document.createElement("h4");
        pokeNumber.textContent = "#" + selectedOrder[i].num;
        pokeNumber.className = "number";
    
        //Creando tipo de pokemon primer tipo
        let pokeType = document.createElement("p");
        pokeType.textContent = selectedOrder[i].type[0]; //tipo 0 
        pokeType.className = "type";
    
        //Creando tipo de pokemon segundo tipo
        let pokeType2 = document.createElement("p");
        pokeType2.className = "type2";
        pokeType2.textContent = selectedOrder[i].type[1];  
    
        //Dando valor a variables
        pokeCards.appendChild(pokeName);
        pokeCards.appendChild(image);
        pokeCards.appendChild(pokeNumber);
        pokeCards.appendChild(pokeType);
        pokeCards.appendChild(pokeType2);
    
        //Mostrar tarjeta en HTLM section
        document.getElementById("pokedex").appendChild(pokeCards).innerHTML;    
    }

})



