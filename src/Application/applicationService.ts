import { WebServiceAdapter } from "@Infraestructure/web/express/app";
import { casaService } from "./Services/casaService";
import { endpointsSetup } from "./Services/webService";

export interface IApplication {
  webServer: WebServiceAdapter;
  casaService: casaService;
  init: () => void;
}

export class applicationService implements IApplication {
  webServer: WebServiceAdapter;
  casaService: casaService;

  constructor(webServiceAdapter: WebServiceAdapter, casaService: casaService) {
    this.webServer = webServiceAdapter;
    this.casaService = casaService;
  }

  init() {
    // config the endpoints to each casaService attribute
    const endpoints: endpointsSetup = {
      "/casa": {
        get: this.casaService.getCasa,
        post: async(data: any) => {
          return await this.casaService.addCasa(data);
        },
      },
    };

    this.webServer.endpoints = endpoints;
    this.webServer.installEndpoints();
    console.log("app running");
  }
}
