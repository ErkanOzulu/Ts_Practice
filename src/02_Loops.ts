// 2. Döngüler
const numbers = [1, 2, 3, 4];

// for
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// for-of
for (const s of numbers) {
  console.log(s);
}

// forEach
numbers.forEach(s => console.log(s));
