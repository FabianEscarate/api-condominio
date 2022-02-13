import { CasaRepo } from "./Infraestructure/Repository/memoryRepoAdapter";
import { WebServiceAdapter } from "./Infraestructure/web/express/app";
import { applicationService } from "./Application/applicationService";
import { casaService } from "./Application/Services/casaService";

const App = new applicationService(
  new WebServiceAdapter(),
  new casaService(new CasaRepo())
);

App.init();
