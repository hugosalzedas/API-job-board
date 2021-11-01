module.exports = app => {
    const companies = require("../controllers/companies.controller.js");
  
    var router = require("express").Router();
  

    router.post("/", companies.create);
  

    router.get("/", companies.findAll);

    router.get("/:id", companies.findOne);
  

    router.put("/:id", companies.update);
  

    router.delete("/:id", companies.delete);
  

    router.delete("/", companies.deleteAll);
  
    app.use('/api/companies', router);
  };