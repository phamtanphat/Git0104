// const teo = {
//     name : 'Nguyen Van Teo',
//     age : 20,
//     sayhello(){
//         console.log(`Xin chao ban ${this.name}`);
//     }
// }
// // console.log(teo.name);
// teo.sayhello()

// Tao ra 1 doi tuong
// function Person(name , age){
//     this.name = name;
//     this.age = age;
//     this.sayhello = function(){
//         console.log(`Xin chao ban ${this.name}`);
//     }
// }

// const ti = new Person("Nguyen Van Ti" , 20);
// ti.sayhello();
// console.log(ti);

// class 
// class Person{
//     constructor(name , age){
//         this.name = name;
//         this.age = age;
//     }
//     sayhello(){
//         console.log(`Xin chao ban ${this.name}` );
//     }
// }

// const ti = new Person("Nguyen Van Ti", 20);
// ti.sayhello();
// const teo = new Person("Nguyen Van Teo", 40);
// teo.sayhello();
// class Point{
//     constructor(x , y){
//         this.x = x;
//         this.y = y;
//     }
//     getDistance(){
//         return Math.sqrt(this.x * this.x + this.y * this.y);
//     }
// }

// const a = new Point(10 , 5);
// console.log(a.getDistance());

function doSth(fn){
    fn(1 , 1);
}
// console.log();
// doSth(function(x , y){
//     console.log(x);
// });
doSth(function(a) {return console.log(a)});
// (function show(){
//     console.log("aaaa");
// })()