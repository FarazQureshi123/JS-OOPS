// yh  hai kya oops
// karna kya hota hai 
//kyu karna hai 
// kaise krte hai
 //functional form mein classes ko mimic karna
 // classes banana
 //objects banana
 //purpose

 //constructor function

//  function Cupcakes(){
//     this.name = "chocolate";

//  }
//  new Cupcakes();

function Ghar(){
    this.shahar = "delhi",
    this.kamre = 3,
    this.bathroom = 2,
    this.kitchen = 1
}
let ghar1 = new Ghar();


 //agar function ko kbhi bhi call karte waqt tumne new ka usekiya toh turant man mein ek blank object banao 
 //jab bhi function mein this ko dekho turant us blank object ko yaad karke us jagah rakhdo

 //purana tareeka objects banananey ka ek constructor function se jb javascript mai  class ka concept nahi tha 

 //one more example of this 
 function Toffee(){
    this.flavour = "vanilla";
    this.price = 1.99;
    this.expiry = "2024-12-31";
 }
 let t1 = new Toffee();
 let t2 = new Toffee();


 function icecream(flavour,price,expiry){
    this.flavour = flavour;
    this.price = price;
    this.expiry = expiry;
 }
 let i1 = new icecream("vanilla",400,2026);
 let i2 = new icecream("butterscouch",500,2026);
 let i3 = new icecream('strawberry',500,2027);


 // Class method to create objects easily 

 class Car{
    //class create krte hi sbse pehle cheez jo bananai hai wo hai constructor
    constructor(name,color,modelnumber,origin){
        this.name = name;
        this.color = color;
        this.modelnumber = modelnumber;
        this.origin = origin;
    }

 }

let c1 = new Car("audi","white",4563,"USA");
let c2 = new Car("AMGmercedezbenz","black",5869,"USA");
 
 

 