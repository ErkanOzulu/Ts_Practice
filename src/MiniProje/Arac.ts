interface IAktif{
    run():void;
}

export class Arac implements IAktif{
    protected marka: string;
    protected model: string;

    constructor(marka: string, model: string) {
        this.marka = marka;
        this.model = model;
    }

    /*
    class Arac implements IAktif {
    constructor(
        protected _marka: string,
        protected _model: string
    ) {}
}
    */

    get Marka(): string {
        return this.marka;
    }

    set Marka(value: string) {
        this.marka = value;
    }

    get Model(): string {
        return this.model;
    }

    set Model(value: string) {
        this.model = value;
    }

    run(): void {
        console.log(`${this.marka} ${this.model} çalıştı.`);
    }
    
    bilgi(): void {
        console.log(`${this.marka} - ${this.model}`);
    }
}