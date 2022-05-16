let select= document.querySelector("#pokedex")
let bouton= document.querySelector("#rechercher")

let info1= document.querySelector("#type")
let info2= document.querySelector("#name")
let info3= document.querySelector("#pv")
let info4= document.querySelector("#idp")
let info5= document.querySelector("#img")
let info6= document.querySelector("#taille")
let info7= document.querySelector("#poids")

bouton.addEventListener('click',barre )
function barre() {
    var selectValue = select.options[select.selectedIndex].value;
    console.log(selectValue)
    let url ="https://pokeapi.co/api/v2/pokemon/"
    fetch(url+selectValue)
    .then(res => res.json())
    .then(resultat => (function (){
        info1.innerHTML+="Type  :  "+resultat.types[0].type.name
        info2.innerHTML+="Nom   :  "+resultat.name
        info3.innerHTML+="<h1 id='pv'>"+resultat.stats[0].base_stat+"PV"+"</h1>"
        info4.innerHTML+="Id   :  "+resultat.id
        info5.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+[resultat.id]+".png"
        info6.innerHTML+="Taille   :  "+resultat.height+ " Cm"
        info7.innerHTML+="Poids   :  "+resultat.weight+ " Kg"

        
      
    } )()
    )
    
}

function liste(){ 
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(res => res.json())
    .then(resultat => (function (){
        let tab=[]
       
        for(let i=0;i<20;i++){
            tab.push(resultat.results[i].name)
        }
      blabla(tab)
    } )()
    )
}
liste()
function blabla(results){   
    console.log(results)
    for(let i=0;i<results.length;i++){ 
    select.innerHTML+=" <option value='"+results[i]+"'>"+results[i]+"</option>";
    console.log(results[i])
    } 
}   




