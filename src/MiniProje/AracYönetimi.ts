import { Arac } from "./Arac";

export class AracYonetici {
    private araclar: Map<string, Arac> = new Map();
  
    ekle(id: string, arac: Arac) {
      this.araclar.set(id, arac);
    }
  
    listele() {
      this.araclar.forEach((arac, id) => {
        console.log(`ID: ${id}`);
        arac.bilgi();   // polymorphic
        arac.run();
        console.log("-----");
      });
    }
  }
  