import { Arac } from './Arac';

export class Otomobil extends Arac {
    constructor(marka: string, model: string, private kapiSayisi: number) {
      super(marka, model);
    }
  
    bilgi(): void {
      super.bilgi();
      console.log(`Kapı sayısı: ${this.kapiSayisi}`);
    }
  }
  
  export class Kamyon extends Arac {
    constructor(marka: string, model: string, private yukKapasitesi: number) {
      super(marka, model);
    }
  
    bilgi(): void {
      super.bilgi();
      console.log(`Yük kapasitesi: ${this.yukKapasitesi} kg`);
    }
  }
  