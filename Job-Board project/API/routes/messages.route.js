module.exports = app => {
    const messages = require("../controllers/messages.controller.js");
  
    var router = require("express").Router();
  

    router.post("/", messages.create);
  

    router.get("/", messages.findAll);

    router.get("/:id", messages.findOne);
  
    router.delete("/:id", messages.delete);

    router.delete("/", messages.deleteAll);
  
    app.use('/api/messages', router);
  };