import data from './data/pokemon/pokemon.js';
import {filterData, filterType, filterEggs, pokemonId} from './data.js';

//modal - Para que funcione con todas las tarjetas es necesario agregar un addeventlistener
const modal = ()=>{
    let ask = document.querySelectorAll("div.pokeCards");

    for (let i=0; i<ask.length; i++) {
        ask[i].addEventListener("click", () => { 
        document.getElementById("modalPokedex").innerHTML = ""; 
        let pokemon = pokemonId(ask[i].getAttribute("value"));
        let pokeCards = document.createElement("div"); 
        pokeCards.className = "modalpokeCards";
        pokeCards.id = "modalpokeCards";  

        //función para cerrar modal
        let span = document.createElement("span");
        span.className = "close";
        span.textContent="x"; 
    
        //variable para crear nombre pokemon
        let Name = document.createElement("h3");
        Name.textContent = pokemon.name;
    
        //variable para craer imagen pokemon
        let image = document.createElement("img");
        image.src = pokemon.img;
    
        //variable peso pokemon
        let weight = document.createElement("p");
        weight.className="peso";
        weight.textContent = "Peso: " + pokemon.weight;
    
        //variable para altura
        let height = document.createElement("p");
        height.className="altura";
        height.textContent = "Altura: " + pokemon.height;

        //dulces
        let candy = document.createElement("p");
        candy.className= "candy"
        candy.textContent = "Dulce: " + pokemon.candy;
    
        //debilidades
        let weaknesses = document.createElement("p");
        weaknesses.className= "candy"
        weaknesses.textContent = "Debilidades: " + pokemon.weaknesses;

        //Dando valor a variables
        pokeCards.appendChild(span);
        pokeCards.appendChild(Name);
        pokeCards.appendChild(image);
        pokeCards.appendChild(weight);
        pokeCards.appendChild(height);
        pokeCards.appendChild(candy);
        pokeCards.appendChild(weaknesses);
    
        //Mostrar tarjeta en HTLM section
        document.getElementById("modalPokedex").appendChild(pokeCards).innerHTML;  
        let mod = document.getElementById("modalpokeCards");
        let body = document.getElementsByTagName("body")[0];
        let x = document.getElementsByClassName ("close")[0];
        let container = document.getElementsByClassName("pokedex")[0];
        mod.style.display = "block";
        container.style ="pointer-events:none;";
        container.style.opacity = 0.5;
        x.onclick = function () {
            mod.style.display = "none";
            body.style.position = "inherit";
            container.style ="pointer-events:active;";
            container.style.opacity = 1;
        }
        });
    } 
}


//Creacion de tarjetas index
for (let i = 0; i < data.pokemon.length; i++) {    
    //variable para crear tarjeta
    let pokeCards = document.createElement("div");
    pokeCards.className = "pokeCards";
    pokeCards.id = "pokeCards";   
    pokeCards.setAttribute("value", data.pokemon[i].id); //pertenece al modal

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
    pokeType.className = "info";

    //Creando tipo de pokemon segundo tipo
    let pokeType2 = document.createElement("p");
    pokeType2.className = "info";
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
modal();    

//seleccionar ordenar por alfabeto o numero
const selectOrder = document.getElementById("order");
selectOrder.addEventListener("change", ()=>{
    let selectedOrder = filterData(selectOrder);
    
    document.getElementById("pokedex").innerHTML="";

    for (let i = 0; i < selectedOrder.length; i++) { 
        let pokeCards = document.createElement("div");
        pokeCards.className = "pokeCards";
        pokeCards.id = "pokeCards";   
        pokeCards.setAttribute("value", selectedOrder[i].id);
    
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
        pokeType.className = "info";
    
        //Creando tipo de pokemon segundo tipo
        let pokeType2 = document.createElement("p");
        pokeType2.className = "info";
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
    modal();   
})
 

//seleccionar ordenar por tipo
const selectType = document.getElementById("type");
selectType.addEventListener("change", ()=>{
    let pokeTypes = filterType(selectType.value);

    document.getElementById("pokedex").innerHTML=""; //las comillas borran la información 

    for (let i = 0; i < pokeTypes.length; i++) { 
        let pokeCards = document.createElement("div");
        pokeCards.className = "pokeCards";
        pokeCards.id = "pokeCards";   
        pokeCards.setAttribute("value", pokeTypes[i].id);
    
        //variable para crear nombre pokemon
        let pokeName = document.createElement("h3");
        pokeName.textContent = pokeTypes[i].name;
    
        //variable para craer imagen pokemon
        let image = document.createElement("img");
        image.src = pokeTypes[i].img;
    
        //variable número pokemon
        let pokeNumber = document.createElement("h4");
        pokeNumber.textContent = "#" + pokeTypes[i].num;
        pokeNumber.className = "number";
    
        //Creando tipo de pokemon primer tipo
        let pokeType = document.createElement("p");
        pokeType.textContent = pokeTypes[i].type[0]; //tipo 0 
        pokeType.className = "info";
    
        //Creando tipo de pokemon segundo tipo
        let pokeType2 = document.createElement("p");
        pokeType2.className = "info";
        pokeType2.textContent = pokeTypes[i].type[1];  
    
        //Dando valor a variables
        pokeCards.appendChild(pokeName);
        pokeCards.appendChild(image);
        pokeCards.appendChild(pokeNumber);
        pokeCards.appendChild(pokeType);
        pokeCards.appendChild(pokeType2);
    
        //Mostrar tarjeta en HTLM section
        document.getElementById("pokedex").appendChild(pokeCards).innerHTML;     
    }
    modal();   
})
 

//seleccionar ordenar por huevos
const selectEggs = document.getElementById("eggkm");
selectEggs.addEventListener("change", ()=>{
    let pokeTypes = filterEggs(selectEggs.value);

    document.getElementById("pokedex").innerHTML=""; //las comillas limpian la información, para que no asumule

    for (let i = 0; i < pokeTypes.length; i++) { 
        let pokeCards = document.createElement("div");
        pokeCards.className = "pokeCards";
        pokeCards.id = "pokeCards";   
        pokeCards.setAttribute("value", pokeTypes[i].id);
    
        //variable para crear nombre pokemon
        let pokeName = document.createElement("h3");
        pokeName.textContent = pokeTypes[i].name;
    
        //variable para craer imagen pokemon
        let image = document.createElement("img");
        image.src = pokeTypes[i].img;
    
        //variable número pokemon
        let pokeNumber = document.createElement("h4");
        pokeNumber.textContent = "#" + pokeTypes[i].num;
        pokeNumber.className = "number";
    
        //Creando tipo de pokemon primer tipo
        let pokeType = document.createElement("p");
        pokeType.textContent = pokeTypes[i].type[0]; //tipo 0 
        pokeType.className = "info";
    
        //Creando tipo de pokemon segundo tipo
        let pokeType2 = document.createElement("p");
        pokeType2.className = "info";
        pokeType2.textContent = pokeTypes[i].type[1];  
    
        //Dando valor a variables
        pokeCards.appendChild(pokeName);
        pokeCards.appendChild(image);
        pokeCards.appendChild(pokeNumber);
        pokeCards.appendChild(pokeType);
        pokeCards.appendChild(pokeType2);
    
        //Mostrar tarjeta en HTLM section
        document.getElementById("pokedex").appendChild(pokeCards).innerHTML;       
    }
    modal();   
})

