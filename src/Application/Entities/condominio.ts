import { ICasa } from "./casa";

export interface ICondominio {
  name: string;
  address: string;
  houses: [ICasa];
}

export class Condominio implements ICondominio {
  name!: string;
  address!: string;
  houses!: [ICasa];
}
