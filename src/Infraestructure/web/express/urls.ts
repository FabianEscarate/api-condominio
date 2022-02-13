import { Router } from "express";
// urls Admin
const urlsAdminSite = require("./admin/urls.js");
// urls APIs
const urlsAPI = require("./api/urls.js");

const route = Router();

route.use("/Admin", urlsAdminSite);
route.use("/API", urlsAPI);

export default route;
