let person ={
    firstName: "Ernest",
    lastName: "Anmol",

    getFullName : function(){
        return `The name of the person is ${person.firstName} ${person.lastName}`;
    },

    PhoneNumber: {
        mobile:"123345",
        Landline:"6789",
    },
};

console.log(person.getFullName());
console.log(person.PhoneNumber.Landline);


function person(firstName,Lastname){
    this.firstName = firstName;
    this.lastName = Lastname;
}

let person1= new person("Ernest", "Anmol");
let person2= new person("Rohit", "Indwar");


console.log(person1.firstName);
console.log(`${person2.firstName} ${person1.lastName}`);


const coder={
    isStudying:false,
    printIntroduction:function(){
        console.log(`My name is ${this.name}. an i studying?: ${this.isStudying}`);
    },
};

const me = Object.create(coder);
me.name="Ernest Anmol";
me.isStudying=true;
me.printIntroduction();


class vehicle{
    constructor(name,year,owner){
        this.name=name;
        this.year=year;
        this.owner=owner;
}

getDetails(){
    console.log(`The name of the vehicle is ${this.name} and it was made in ${this.year} and owner name is ${this.owner}`);
}
};
let v1 =new vehicle("Ktm" ,"2023","Ernest");

let v2 =new vehicle("Kwasaki" ,"2024","Akash");

console.log(v1.name);
console.log(v2.year);
console.log(v2.getDetails());

function vehicle(name,year , owner){
    this.name=name;
    this.year=year;
    this.owner=owner;
}
vehicle.prototype.getDetails=function(){
return`The name of the vehicle is ${this.name} `;
};

let v1 =new vehicle("Ktm" ,"2023","Ernest");

let v2 =new vehicle("Kwasaki" ,"2024","Akash");

console.log(v1.name);
console.log(v2.year);
console.log(v2.getDetails());


class Person{
    constructor(name, id){
      this.name = name;
      this.id = id;
   }
  
  addAddress(newAddress){
    this.address = newAddress;
    }
  
  getDetails(){
    console.log("Name is: $(this.name) and the address is: $(this.address)")
    }
  }
  
  let person5 = new  Person("Shantanu", 24);
  person1.addAddress("Kolkata");
  person1.getDetails();
  
  
  class Person{
    constructor(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
   
  
  let getDetails_NoAccess = function(){
    return "The first name is: $(this.firstName) and last name is: $(this.lastName)";
    };
  
  
    this.getDetails_Acess = function(){
      return "The first name is: $(this.firstName) and last name is: $(this.lastName)";
      };
    } 
  }
  
  let person6 = new  Person("Shantanu", "Shubham");
  
  console.log(perosn1.firstName);
  console.log(person1.getDetails_NoAccess());
  console.log(person1.getDetails_Access());
  
  
  class Person{
    constructor(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
   
  
    getDetails_Acess = function(){
      return "The first name is: $(this.firstName) and last name is: $(this.lastName)";
      };
    } 
  }
  
  class Student extends Person{
    constructor(firstName, lastName, rollNumber){
      super(firstName,lastName);
      this.rollNumber = rollNumber;
  
    getDetails_Acess = function(){
      return "The first name is: $(this.firstName) and last name is: $(this.lastName) and the roll number is: $(this.rollNumber)";
      };
    }
  }
  let person1 = new  Person("Shantanu", "Shubham");
  
  console.log(perosn1.firstName);
  console.log(person1.getDetails_NoAccess());
  
  let studemt1 = new Student("Ernest","Anmol", 90);
  console.log(student1.getDetails());