const selects = document.querySelectorAll('[data-pick]');

const PICKINGS = [{
    name:"scissor",emoji:"✌️",beats:"paper"

},{
    name:"paper",emoji:"✋",beats:"rock"

},{
    name:"rock",emoji:"✊",beats:"scissor"

}]

let random
let youscore =0
let comscore =0

selects.forEach(el=>{
    el.addEventListener('click',()=>{
    const pick = el.dataset.pick;
    const pickitem = PICKINGS.find(i=>{
        return i.name === pick
    })


    // //youneverscoreifyou use this code
    // const comm = PICKINGS.find(e=>e.beats == pickitem.name)
 
  random = Math.floor(Math.random()*3)
    const compicks = PICKINGS[random]
    const playerwins = toknowwhowins(pickitem.name,compicks.name)
    const comwins = toknowwhowins(compicks.name,pickitem.name)
    let pwins 
    let cwins 

    console.log("computer:"+compicks.name)
    console.log("You:"+pickitem.name)
    if(pick == compicks.name){
    console.log("its a draw");
    }
    if(playerwins.length == 1){
       console.log(" You win");
       youscore +=1
       pwins=true

    }
    else{
        pwins=false
    }
    
    if(comwins.length == 1){
        console.log("Com Win");
        comscore+=1
       
        cwins=true
     }  else{
        cwins=false
    }

    matchpicks(compicks,pickitem,youscore,comscore,pwins,cwins)
     
    })
   
})


const result=document.querySelector(".results");

const comscoree = document.querySelector(".com-score");
const youscoree= document.querySelector(".you-score");

function matchpicks(com,plau,score,comcore,p,c) {


    
    let youdiv = document.createElement("div")
    youdiv.textContent = plau.emoji
    youdiv.classList.add("history")
    youscoree.after(youdiv)


    let comdiv = document.createElement("div")
    comdiv.textContent = com.emoji
    comdiv.classList.add("history")
    comscoree.after(comdiv)
console.log(plau.emoji)
comscoree.textContent = comcore
youscoree.textContent =score
console.log(p,c)
if(p){
youdiv.classList.add("winner")


}
 if(c){
comdiv.classList.add("winner")

}



}


 const toknowwhowins = (pio,cos)=>{
    
return PICKINGS.filter(i=>{
        return i.name === pio && i.beats === cos

    })
 }

