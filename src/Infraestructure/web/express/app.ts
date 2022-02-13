import express from "express";
import {
  endpointsSetup,
  IWebServicePort,
  SERVERSTATUS,
} from "../../../Application/Services/webService";

export class WebServiceAdapter implements IWebServicePort {
  static PORT = 3000;
  private api;
  endpoints: endpointsSetup;

  constructor(endpoints?: endpointsSetup) {
    this.endpoints = endpoints;
    this.api = express();
    // for parsing body
    this.api.use(express.urlencoded({ extended: true }));
    // for parsing application/json
    this.api.use(express.json());
    this.api.listen(WebServiceAdapter.PORT, () => {
      console.log(`Server Running in port: ${WebServiceAdapter.PORT}`);
    });
  }

  getStatus = () => {
    return this.api ? SERVERSTATUS.UP : SERVERSTATUS.DOWN;
  };

  installEndpoints = () => {
    Object.entries(this.endpoints).forEach((endpointConfig, i) => {
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
              this.api.get(endpoint, async (req, res, next) => {
                return res.json(await verb[1]());
              });
              break;
            case "post":
              this.api.post(endpoint, async (req, res, next) => {
                const { body } = req;
                console.log(body);
                return res.json(await verb[1](body));
              });
              break;
            case "put":
              this.api.put(endpoint, async (req, res, next) => {
                return res.json(await verb[1]());
              });
              break;
            case "delete":
              this.api.delete(endpoint, async (req, res, next) => {
                return res.json(await verb[1]());
              });
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

// const app = express();
// // const passport = require("passport");
// // const connectFlash = require("connect-flash");
// // const session = require("express-session");

// // cargar configuracion de App
// // require("./settings.js")(app, express);
// // configuracion mantenedor urls
// // require("./urls.js")(app);
// // configuracion mongoDB
// // require("./mongo.js");

// // app.use(express.urlencoded({ extended: true }))

// app.get("/", (req, res) => {
//   // res.status(200).render("home");
// });

// export { app, express };
