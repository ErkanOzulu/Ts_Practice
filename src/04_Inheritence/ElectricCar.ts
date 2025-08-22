import { Car } from './Car';

class ElectricCar extends Car{
    constructor(marka: string, hiz: number, private batarya: number) {
      super(marka, hiz);
    }
  
    sarjDurumu() {
      console.log(`Batarya: ${this.batarya}%`);
    }
  }

  const tesla = new ElectricCar("Tesla", 250, 80);
tesla.bilgi();        // Tesla 250 km/h
tesla.sarjDurumu();   // Batarya: 80%