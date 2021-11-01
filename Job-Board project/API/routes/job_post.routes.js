module.exports = app => {
    const jobs = require("../controllers/job.controller.js");
  
    var router = require("express").Router();
  

    router.post("/", jobs.create);
  

    router.get("/", jobs.findAll);
  

    router.get("/available", jobs.findAllAvailable);
  

    router.get("/:id", jobs.findOne);
  

    router.put("/:id", jobs.update);
  

    router.delete("/:id", jobs.delete);
  

    router.delete("/", jobs.deleteAll);
  
    app.use('/api/jobs', router);
  };