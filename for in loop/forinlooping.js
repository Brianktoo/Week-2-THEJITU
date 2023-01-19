const person = {
    firstname: 'brian',
    secondname: 'kipkosgei',
    location: 'eldoret',
    age:30,
};
let input = " ";
for(let x in person){
    input +=person[x] + " ";
}
console.log(input);