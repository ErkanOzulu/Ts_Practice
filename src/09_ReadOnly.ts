type User = {
    readonly id: number;  //Java'daki final field.
    ad: string;
  };
  
  const k1: User = { id: 1, ad: "Ali" };
  k1.ad = "Ahmet";         //  değiştirilebilir
  // k1.id = 2;            //  HATA: id readonly
  