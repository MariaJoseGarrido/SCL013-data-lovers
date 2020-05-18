import data from './data/pokemon/pokemon.js';

//función ordernar por alfabeto y número
export const filterData = (filterOrder) => {
    let filtered = "";
    if (filterOrder==="1-151") {
        filtered = data.pokemon.sort((a,b)=>{
            return a.id - b.id
        })} else if (filterOrder==="151-1"){
            filtered = data.pokemon.sort((a,b)=> {
                return b.id - a.id    
        })} else if (filterOrder==="A-Z"){
            filtered = data.pokemon.sort ((a,b)=>{
                return a.name.localeCompare(b.name);
        })}
            else if (filterOrder==="Z-A"){
            filtered = data.pokemon.sort ((a,b)=>{
                return b.name.localeCompare(a.name);
            })}    
            else if (filterOrder==="0"){
            filtered = data.pokemon.sort((a,b)=>{
                return a.id - b.id
            })}

        return filtered;
};

//función ordernar tipo
export const filterType = (selectedType) => {
    let typeFilter = data.pokemon.filter(element => element.type.includes(selectedType));
    return typeFilter;
} 

//función ordernar por huevo
export const filterEggs = (selectedEggs) => {
    let eggFilter = data.pokemon.filter(element => element.egg.includes(selectedEggs));
    return eggFilter;
    
}

//función para modal/ revisa cada pokemón según lo clickeado
export const pokemonId=(pokemonInfo) => {
    let result = data.pokemon.find (element =>{
        return element.id == pokemonInfo; 
    
    });
    return result;
};

