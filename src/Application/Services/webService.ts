import { casaService } from "./casaService";

enum ENDPOINTS {
  CASA = "/casa",
}

enum HTTPVERBS {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

export enum SERVERSTATUS {
  UP = "UP",
  DOWN = "DOWN",
}

type serverAction = (...[]:any) => Promise<any>;

type httpVerbAction = {
  [prop in HTTPVERBS]?: serverAction;
};

export type endpointsSetup = {
  [prop in ENDPOINTS]: httpVerbAction;
};

export interface IWebServicePort {
  endpoints: endpointsSetup;
  casaService:casaService;
  getStatus: () => SERVERSTATUS;
  setupEndpoints: () => void;
  installEndpoints: () => void;
}
