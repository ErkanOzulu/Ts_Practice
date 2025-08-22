interface Drivable{
    drive():void;
}
class Motorcycle implements Drivable{

    drive(): void {
        console.log("Driving motorcyle..")
    }
}
const m1=new Motorcycle();
m1.drive();