interface Shape {
    area(): number;
  }
  
  class Square implements Shape {
    
    constructor(private side: number) {}

    area(): number {
      return this.side * this.side;
    }

  }
  
  class Circle implements Shape {
    
    constructor(private r: number) {}
    area(): number {
      return Math.PI * this.r * this.r;
    }
  }
  
  // Polymorphic kullanım
  const shapes: Shape[] = [new Square(4), new Circle(3)];
  
  shapes.forEach(s => console.log(s.area()));
  