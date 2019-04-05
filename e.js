class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    sayhello(){
        console.log(`Xin chao ban ${this.name}`);
    }
}
class Child extends Person{
    constructor(name , age , height){
        super(name , age);
        this.height = height;
    }
}
const teo = new Child("Nguyen Van teo",20 ,120);
console.log(teo);