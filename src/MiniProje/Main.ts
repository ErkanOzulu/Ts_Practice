import { AracYonetici } from './AracYönetimi';
import { Otomobil,Kamyon} from './Otomobil';

const yonetici = new AracYonetici();

yonetici.ekle("A1", new Otomobil("Toyota", "Corolla", 4));
yonetici.ekle("B1", new Kamyon("Volvo", "FH16", 18000));

yonetici.listele();