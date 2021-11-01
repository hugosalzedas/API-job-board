module.exports = app => {
    const locations = require("../controllers/locations.controller.js");
  
    var router = require("express").Router();
  

    router.post("/", locations.create);
  

    router.get("/", locations.findAll);

    router.get("/:id", locations.findOne);

    router.put("/:id", locations.update);
  
    router.delete("/:id", locations.delete);

    router.delete("/", locations.deleteAll);
  
    app.use('/api/locations', router);
  };