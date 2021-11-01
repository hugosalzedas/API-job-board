module.exports = app => {
    const user_types = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  

    router.post("/", user_types.create);
  

    router.get("/", user_types.findAll);

    router.get("/companies", user_types.findAllCompanies);
    router.get("/seekers", user_types.findAllSeekers);

    router.get("/:id", user_types.findOne);
  

    router.put("/:id", user_types.update);
  

    router.delete("/:id", user_types.delete);
  

    router.delete("/", user_types.deleteAll);
  
    app.use('/api/users', router);
  };