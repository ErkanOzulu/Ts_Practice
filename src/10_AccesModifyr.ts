class Employee {
  public ad: string;
  private sifre: string;
  protected gizliNot: string;

  constructor(ad: string, sifre: string, not: string) {
    this.ad = ad;
    this.sifre = sifre;
    this.gizliNot = not;
  }

  sifreyiGoster() {
    console.log(this.sifre);  // içerden erişilebilir
  }
  

}

const ali = new Employee("Ali", "1234", "Not");

// console.log(ali.sifre);     //  dışarıdan erişilemez
console.log(ali.ad);          //  public
ali.sifreyiGoster();

/** public: Her yerden erişilir.

private: Sadece sınıfın içinde erişilir.

protected: Sadece sınıfın içinde ve alt sınıflarda erişilir.
*/


