import { Casa } from "../Entities/casa";

class DTOCasa {
  dataInput: object;
  errors!: string[];
  casa!: Casa;

  constructor(dataObject: any) {
    this.dataInput = dataObject;
  }

  validate = () => {
    const data = new Casa();
    console.log('validate');
    for (const key in data) {
      console.log('key',key);
    }
  };
}

export { DTOCasa };
