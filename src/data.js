import data from './data/pokemon/pokemon.js';

//función ordernar por alfabeto y número
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

<<<<<<< HEAD
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
=======

>>>>>>> ebee7685fa0ba20288de8f3ac79f8fbd121f52e4
