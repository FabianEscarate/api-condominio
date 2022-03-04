import { WebServiceAdapter } from "../Infraestructure/web/express/webSerciceAdapter";
import { casaService } from "./Services/casaService";
import { endpointsSetup } from "./Services/webService";

export interface IApplication {
  webServer: WebServiceAdapter;
  init: () => void;
}

export class applicationService implements IApplication {
  webServer: WebServiceAdapter;

  constructor(webServiceAdapter: WebServiceAdapter) {
    this.webServer = webServiceAdapter;
  }

  init() {
    this.webServer.setupEndpoints();
    this.webServer.installEndpoints();
    console.log("app running");
  }
}
