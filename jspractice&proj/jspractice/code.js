
//high ordered func
// function greet (name , callbfunc){
//     const Myn = "Zeus"

//     return console.log(`${callbfunc(name)}, My name is ${Myn}.`);
// }
// //callbackfunction are functions use for parameters and arguments of a High ordered function..

// function morning(name){

//     return `GoodMorning ${name.repeat(3)} `;
// }
// function eve(name){

//     return `GoodEve ${name.repeat(3)} `;
// }

// greet(" Boy bawang",eve);
// //arrowfunc
// ()=> 2 + 3;

// array iterators
//forEach does not return and !return new arrays
// const Ted = [
//     {
//         "name":"mrbean","pspeaking":5 ,"id":1 ,"salary": 400
//     },   {
//         "name":"Powell","pspeaking":3,"id":2,"salary": 200
//     },   {
//         "name":"Teemo","pspeaking":2,"id":3,"salary": 300
//     }
// ];
//anonymous func method by passing directly to the arr iterator or what we called an array methods+

// Ted.forEach((e)=>{
//     console.log(e);
// })

// function ted(e){
//     console.log(e.name.toUpperCase());
// }
// Ted.forEach(ted);

//map return a new array , not change the size of the array
//remember that when you have returning function you need to console.log to show the output 
//its more usefull than foreach you can manipulate the elements inside the arrays.
// const names = Ted.map((e)=>{
// console.log(e);
//     return `<p style="color:maroon; font-size:30px;">${e.name} pro </p>`;
       

// });
// const dd = document.querySelector(".ddd");

// dd.innerHTML = names.join("");

// console.log(names);
 
//filter return a new arrays , can manipulate the size of the array ,return based on the condition 
// const great = Ted.filter((e)=>{

//     return e.pspeaking >= 1 && e.name == "Teemo" ;
// })
// console.log(great);

// find returns single instance in that case object {}
// returns first match remember always place your iterators on variables to specify its uniqueness
// const srchid = Ted.find((e)=>{
// return e.id == 2;

// })
// console.log(srchid.name);
//difference of the two finders
// const srchidf = Ted.filter((e)=>{
//     return e.id == 2;
    
//     })
//     console.log(srchidf[0].name);

//reduce 
// iterates , callback function 
//reduces to a single value - num , array , object
//1 params ('acc') - total of all calculations
// 2 params ('curr') - current iteration / value
// must return the acc or the total!!

// const total = Ted.reduce((acc ,currarray)=>{
 
//     console.log(`total ${acc}`);
//     console.log(`current money ${currarray.salary}`);
//     acc += currarray.salary;
//     return acc;
// },0)
// console.log(`total ${total}`);

//DAte objects

// const date = new Date();

// const hours = date.getHours();

// const mins = date.getDay();
// const hous = date.getMinutes();
// console.log(date);

//creatingelements and text nodes
// const div = document.createElement('div');
// div.textContent = "uamy uamay muatfsa";
// document.body.appendChild(div);
//insertBefore(element,locatiom) appendChild(element)
//ez ways to create elements
// const addme = '<h1>Hello world</h1>';
// dd.innerHTML =addme;

// localStorage.setItem('username','xzeus007');
// localStorage.setItem('password','hahaha');

// const username = localStorage.getItem('username');
// localStorage.clear();



// let friends = [{
//     "malef1":{name:'tiny',level:4 },
//     "malef2":{name:'mrbean',level:61 },
//     "malef3":{name:'bubbles',level:100}

// },{
//     "femalef1":{name:'alleria',level:6},
//     "femalef2":{name:'fanny',level:20},
//     "femalef3":{name:'kagura',level:30}
// }
// ];
//  localStorage.setItem('friendslist',JSON.stringify(friends));
// const friendslist = JSON.parse(localStorage.getItem('friendslist'));

// console.log(friendslist);

//Array.from() covert to an array
//anything in the outside of a function can be access
//THis is Closures
// function outer(outerv,hahaha){
// const haha = "haha";

//     return function inner(innerv,um){
// console.log("inner " + innerv);
// console.log("outer " + outerv);
// console.log("haha: " + hahaha);
// console.log(haha + um);

//     };
// }
// const newfunction = outer("outer",4);

//  newfunction("inner",3);

// const div1 = document.querySelector(".ddd");
// const span = document.createElement("span");
// span.innerText = "JS lang malupet";
// div1.append(span);
// span.remove();

// div1.id = "maumay";
// div1.removeAttribute("id");
// console.log(document.body.innerHTML);
// console.log(div1.id);

//datasets
// const buttons = document.querySelectorAll("button");
// buttons.forEach(button => {
//     button.addEventListener("click", () => {
// const modalId = button.dataset.modalId;
// const modal = document.getElementById(modalId);

// modal.classList.toggle("show");
//     })
// });
// const left = false;
// const watchingtillend = true;
// function checks(cb,cberrors) {
//     if(left){
//         cberrors({message:"why??"})
//     }else if(watchingtillend){
//         cberrors({message:"thanks for watching"})
//     }else{
//         cb("like share and subscribe")
//     }
// }

// checks((successmessage)=>{
//     console.log("Please "+ successmessage)
// },(ereorsmessage)=>{

// console.log(ereorsmessage.message + " hahaha")
// })
//promise
// const left = false;
// const watchingtillend = false;
// let promise = new Promise((resolve,refuse)=>{

// if(left){
//     refuse("Oh no why you left")
// }else if(watchingtillend){
//     refuse("Thanks for watching")
// }else{
//     resolve("subscribe")
// }
// })
// promise.then((promises)=>{
// console.log("Like and "+promises)
// }).catch((promises)=>{
// console.log(promises + " haha");
// })

// arrayorig = [1,2,3,4,5,6,7,8];
// function arraychange(array,cb) {

//    return array.map(cb);

// }
// console.log(arraychange(arrayorig,(e)=>{
//     return e + 1;
// }))
// console.log(arraychange(arrayorig,(e)=>{
//     return e + 2;
// }))
// console.log(arraychange(arrayorig,(e)=>{
//     return e * e;
// }))

// function whatsyourgendernname(gender,name) {
    
// return new Promise((resolve,reject)=>{
//     console.log("hello "+name.toUpperCase()+" your gender is "+ gender  )

//     gender == "male"?resolve("lets go "+ name):reject("your not belong here please leave :)")

// })
// }
// function aresult(result){
//     return new Promise((resolve,reject)=>{
       
//         resolve("response: Bro surpass your limit  "+ result + "#Black Clover")
       

//     })
// }

// whatsyourgendernname("female","erenthekulafo").then((promisemo)=>{
//     console.log("your info's is being analyse by our system")
//     return aresult(promisemo)
// }).then(result=>{
//    console.log("the analysation is completed ")
//     console.log(result)
// }).catch(err=>{
    
// console.log(err)

// })

// async function verasyncnamegender(){
//     try{
// const resonrej= await whatsyourgendernname("male","batosai");
// console.log("your info's is been analyse by the system wait for it");
// const result = await aresult(resonrej)
// console.log("the analysation is completed ")
// console.log(result);
//     }catch(err){
// console.log(err);
//     }
// }
// verasyncnamegender();
  

// fetch('https://reqres.in/api/users',{
// method:'POST',
// headers:{'Content-Type':'application/json'},
// body:JSON.stringify({
//     name:'user 1',password:'haha'
// })

// }).then(e=>{
//     return e.json()
// }).then(e=>{
//     console.log(e);
// })

// export default class User {
//     constructor(name,age){
//         this.name= name
//         this.age = age
//     }
//     printname(num1,num2) {
//         console.log(`My name is ${this.name}`)
//         return num1 + num2
//     }
// }
// export function printage(user) {
//     console.log(`My age is ${user.age}`)
// }

// Destructuring
const array1 = [1,2,3,4,5,6,7,8];
const array2 = [9,10,11,12];
const [a,b,,d,...angmganatitiranaindex] = array1;
console.log(angmganatitiranaindex)

const twoarraynatin = {array1,array2,angmganatitiranaindex}
function num([a,...b]) {
    console.log(`${a} ${b}`)
}
num(array1)
const people={
    name:"lopu",
    age:21,
    gender:"male",
    job:{
        job1:"artist",
        job2:"pro editor"
    }
    ,
    favorite:"garlic"

}
const {name:namepeople1,gender,job:{job1,job2},favorite = "siomai"} = people

console.log(namepeople1,gender,job2,favorite) 
