import express from "express";
import { createServer, Server } from "http";
import { casaService } from "../../../Application/Services/casaService";
import {
  endpointsSetup,
  IWebServicePort,
  SERVERSTATUS,
} from "../../../Application/Services/webService";

export class WebServiceAdapter implements IWebServicePort {
  static PORT = 3000;
  private server: Server;
  private webApp: any;
  endpoints!: endpointsSetup;
  casaService: casaService;

  constructor(casaService: casaService) {
    this.casaService = casaService;
    this.webApp = express();
    // for parsing body
    this.webApp.use(express.urlencoded({ extended: true }));
    // for parsing application/json
    this.webApp.use(express.json());

    this.server = createServer(this.webApp);

    this.server.listen(WebServiceAdapter.PORT, () => {
      console.log(`Server Running in port: ${WebServiceAdapter.PORT}`);
    });
  }
  
  getStatus = () => {
    return this.server ? SERVERSTATUS.UP : SERVERSTATUS.DOWN;
  };

  setupEndpoints = () => {
    // config the endpoints to each casaService attribute
    const endpoints: endpointsSetup = {
      "/casa": {
        get: this.casaService.getCasa,
        post: async (data: any) => {
          return await this.casaService.addCasa(data);
        },
      },
    };

    this.endpoints = endpoints;
  };

  installEndpoints = () => {
    Object.entries(this.endpoints).forEach((endpointConfig, _i) => {
      const endpoint = endpointConfig[0];
      const action = endpointConfig[1];
      const endpointVerbs = Object.entries(action);

      if (endpoint) {
        if (endpointVerbs.length === 0) {
          console.log(`Endpoint ${endpoint} no configure`);
          return;
        }
        for (const verb of endpointVerbs) {
          switch (verb[0]) {
            case "get":
              this.webApp.get(
                endpoint,
                async (
                  _req: any,
                  res: { json: (arg0: any) => any },
                  _next: any
                ) => {
                  return res.json(await verb[1]());
                }
              );
              break;
            case "post":
              this.webApp.post(
                endpoint,
                async (
                  req: { body: any },
                  res: { json: (arg0: any) => any },
                  _next: any
                ) => {
                  const { body } = req;
                  console.log(body);
                  return res.json(await verb[1](body));
                }
              );
              break;
            case "put":
              this.webApp.put(
                endpoint,
                async (
                  _req: any,
                  res: { json: (arg0: any) => any },
                  _next: any
                ) => {
                  return res.json(await verb[1]());
                }
              );
              break;
            case "delete":
              this.webApp.delete(
                endpoint,
                async (
                  _req: any,
                  res: { json: (arg0: any) => any },
                  _next: any
                ) => {
                  return res.json(await verb[1]());
                }
              );
              break;
            default:
              console.log(`no option to ${verb[0]} Verb`);
              break;
          }
        }
      }
    });
  };
}
