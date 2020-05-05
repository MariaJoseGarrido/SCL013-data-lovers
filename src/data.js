import data from './data/pokemon/pokemon.js';

//funcion ordernar por alfabeto y numero
export const filterData = (selectedOrder) => {
    let filterOrder = selectedOrder.options[selectedOrder.selectedIndex].value;
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
        return filtered;
};


