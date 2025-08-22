// 1. Değişken Tanımlama (let, const, var)

let userName: string = "Ahmet";      // değişebilir
const age: number = 25;          // sabit
var country: string = "İstanbul";  // global scoped (tercih edilmez)
console.log(userName)

// as – Type Assertion

let data: unknown = "Merhaba";

//console.log(data.length);      //  bilinmeyen tip 
console.log((data as string).length); //  8  
// as, derleyiciye "eminim, bu şu tipte" demektir. Ama dikkat: yanlış kullanırsan hata verir.

// unknown vs any

let x: any = 5;
x = "Merhaba";  // her şey olur, hiçbir kontrol yok

let y: unknown = 10;
y = "Test";     // değer atanır ama...

// console.log(y.length);    //  Hata: unknown tipte
if (typeof y === "string") {
  console.log(y.length);    // Güvenli
}

// never, bu fonksiyonun asla geri dönmeyeceğini gösterir. Genelde hata fırlatıldığında veya sonsuz döngüde kullanılır.
function giveError (mesaj: string): never {
    throw new Error(mesaj);
  }
  giveError("Dur");