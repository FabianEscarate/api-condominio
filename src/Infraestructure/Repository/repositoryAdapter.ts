import { Mongoose } from "mongoose";
import { Casa } from "../../Application/Entities/casa";
import { ICasaServicePort } from "../../Application/Services/casaService";

type orms = Mongoose | any;

type ormContext<T> = T;

export class repositoryAdapter implements ICasaServicePort {
  public omrUsed: string;
  private dbContext: ormContext<orms>;
  constructor(dbContext: orms) {
    this.dbContext = dbContext;
    this.omrUsed = this.dbContext.constructor.name;
  }
  addCasa!: (casa: Casa) => Promise<Casa>;
  getCasa!: (idCasa?: number) => Promise<Casa[]>;
  updateCasa!: (casa: Casa) => Promise<Casa>;
  deleteCasa!: (idCasa: number) => Promise<Casa>;
}
