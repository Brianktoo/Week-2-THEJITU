// let username;
// document.getElementById("myButton").onclick=function(){
//     username = document.getElementById('mytext').value
//     console.log(username);
// }
// let firstname = 'Ken'
// let secondname = 'mark'
//displaying input content on the screen
const enteredname = document.getElementById('Fname');
const paragraph = document.getElementById('results')
const myButton = document.getElementById('btn')


myButton.addEventListener('click', ()=>{
    paragraph.innerHTML += `<li>${enteredname.value}</li>`
});
// console.log(firstname +" "+ secondname);
// console.log(`${firstname} ${6+9}`);
