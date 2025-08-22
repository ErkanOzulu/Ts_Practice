export class Car {
    
  constructor(
      private _marka: string,
      private _hiz: number
    ) {}
  
    get marka() {
      return this._marka;
    }
  
    set hiz(deger: number) {
      this._hiz = deger;
    }
  
    bilgi(): void {
     console.log(`${this._marka} ${this._hiz} km/h`);
    }
  }
  
const bmw = new Car("BMW", 200);
bmw.hiz = 220;
console.log(bmw.marka);
bmw.bilgi();  // BMW 220 km/h