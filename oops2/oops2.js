// function Toffee(){
//     this.name = "alpenliebe";
//     this.price = 5;
//     this.origin = "canada";
// }
// let t1 = new Toffee();


// class Toffee2 {
//     constructor(name,price,origin){
//         this.name = name;
//          this.price=price;
//         this.origin = origin;
       
//     }
// }
// let t2 = new Toffee2("kachaaam",5,"india");


// function Toffee(name){
//     this.name = name;
    
// }
// Toffee.prototype.price = 3;
// let t1 = new Toffee("alpenliebe");


function Human(name,age,isHandsome){
    this.name = name;
    this.age = age;
    this.isHandsome = isHandsome;
}

Human.prototype.sayHello = function(){
    console.log("hello"); //hr object pr nhi ja rha hai prototype prototype sbka shared hota hai
}
let h1 = new Human ("sachin",25,true);



//sabse pehle property ko object mai dhundey ge agr apko nhi mila toh prototype mai dhunde gai  

// function Toffee(name,price){
//     this.name = name;
//     // this.price = price;
// }
// Toffee.prototype.price = 1;
// let t2 = new Toffee("kacha aam",10);

//js mai toh functions bhi objects hai console.dir(function)kro object dikega function bhi


function Toffee3(name){
    this.name = "#)"+ name;
    this.printmyname = function(){
        console.log(this.name)
    }
}
let t1 = new Toffee3("kacha aam");
let t3 = new Toffee3("mango bite");


function Employee(name,age,id,salary){
    this.name = name;
    this.age = age;
    this.id = id;
    this.salary = salary;

}
Employee.prototype.printDetails = function(){
    console.log(`${this.name}is my name and i am ${this.age} years old and my id is ${this.id}and my salary is ${this.salary}.`)
}
let e1 = new Employee("harsh",34,456,50000);
