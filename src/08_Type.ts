//Type & Union Types
type Person={
   name:string;
   age:number;
}

const erk: Person={name:"Erk",age:40};

function print(data :Person |string){
    if(typeof data==="string"){
        console.log("Name:"+ data)
    }else{
        console.log(`Person info -> Name: ${erk.name}, Age: ${erk.age} `)
    }
}
print("Ahmet");
print(erk);