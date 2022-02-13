import { Casa } from "../Entitires/casa";

export interface ICasaServicePort {
  addCasa: (casa: Casa) => Promise<Casa>;
  getCasa: (
    idCasa?: number
  ) => Promise<typeof idCasa extends number ? Casa : Array<Casa>>;
  updateCasa: (casa: Casa) => Promise<Casa>;
  deleteCasa: (idCasa: number) => Promise<Casa>;
}

interface ICasaServiceRepository {
  casaRepository: ICasaServicePort;
  addCasa: (casa: Casa) => Promise<Casa>;
  getCasa: (
    idCasa?: number
  ) => Promise<typeof idCasa extends number ? Casa : Array<Casa>>;
  updateCasa: (casa: Casa) => Promise<Casa>;
  deleteCasa: (idCasa: number) => Promise<Casa>;
}

export class casaService extends Casa implements ICasaServiceRepository {
  casaRepository: ICasaServicePort;

  constructor(casaRepo: ICasaServicePort) {
    super();
    this.casaRepository = casaRepo;
  }

  addCasa = async (casa: Casa) => {
    const addedCasa = await this.casaRepository.addCasa(casa);
    return addedCasa;
  };
  getCasa = async (idCasa?: number | undefined) => {
    let result;
    if (idCasa) result = await this.casaRepository.getCasa(idCasa);
    else result = await this.casaRepository.getCasa();

    return result;
  };
  updateCasa: (casa: Casa) => Promise<Casa>;
  deleteCasa: (idCasa: number) => Promise<Casa>;
}
