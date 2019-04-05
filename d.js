const numbers = [1,3,2,4,6,5,8,7,9];

const persons = [
    {name : 'Ti' , age : 10 , height : 120},
    {name : 'Teo' , age : 12 , height : 110},
    {name : 'Tun' , age : 14 , height : 130},
    {name : 'Hoa' , age : 11 , height : 100},
]

//  const arr = numbers.map(number =>  number * number);
// for(let i = 0 ; i <numbers.length ; i++) arr.push(numbers[i] * numbers[i]);
// console.log(arr);
// console.log(numbers);
// const arr = persons.map(person => person.age);
//  console.log(arr);
// const arr = numbers.filter(number => number > 1);
// console.log(arr);

Array.prototype.mymap = function(fn){
    const arr = [];
    for(let i = 0 ; i < this.length ; i++){
        const element = this[i];
        arr.push(fn(element));
    }
    return arr;
}
const arr = numbers.mymap(number => number);
console.log(arr);