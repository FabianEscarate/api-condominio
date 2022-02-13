import { Casa } from "src/Application/Entitires/casa";
import { ICasaServicePort } from "src/Application/Services/casaService";

export class CasaRepo implements ICasaServicePort {
  casaData: any[];
  constructor() {
    this.casaData = [];
  }
  addCasa = async (casa: Casa) => {
    const data = casa;
    this.casaData.push(data);
    return data;
  };
  getCasa = (idCasa?: number) => {
    if (idCasa) return this.casaData[idCasa - 1];
    else return this.casaData;
  };
  updateCasa: (casa: Casa) => Promise<Casa>;
  deleteCasa: (idCasa: number) => Promise<Casa>;
}
