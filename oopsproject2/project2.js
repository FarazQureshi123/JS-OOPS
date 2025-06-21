class MobileShop{

    constructor() {
        this.mobiles = [];
    }
    addMobile(mobile) {
        this.mobiles.push(mobile);
    }

    listAllMobiles(){

        this.mobiles.forEach(function(mb,index){
            console.log(`${index + 1}) ${mb.brand} - ${mb.model} - ${mb.color} -${mb.price}`)
        })
    }
    
    
}

class Mobile{

    constructor(brand,model,price,color){
        this.id = Math.floor(Math.random()*100000);
        this.model = model;
        this.color = color;
        this.brand = brand;
        this.sims = [];
    }   
    getMobileInfo(id) {
        console.log(`${this.brand} - ${this.model} = ${this.price} - ${this.color} - ${this.sims[0].brand + " " +this.sims[1].brand}`);
    }
}
 insertSim(sim);``{
    if(this.sims.length === 2){
        console.log("sorry you already have 2 sims installed.");
        return;
    }
    this.sims.push(sim);
}
class Sim {
    constructor(brand,balance){
        this.brand = brand;
        this.balance = balance;

    }
    addBalance(balance){

        if(balance < 0) {
            console.log("to add balance give amount greater than 0");
            return;
        }
        this.balance += balance;
    }
}

let myMobileShop = new MobileShop();
let Samsung=  new Mobile("Samsung","Galaxy s23 ultra", 120000,"black");
let tatadocomo = new Sim("tatadocomo",300);

Samsung.insertSim(tatadocomo);
myMobileShop.addMobile(Samsung);