//const express = require ('express')
//const jobs = require ('./../models/job_posts')
//const router = express.Router()

// obtenir tous les jobs
//router.get('/jobs', function (req, res, next) {
   // jobs.find({}).then(function(jobs){
    //    res.send(jobs)
   // }).catch(next)
//})
//obtenir un job 
//router.get
// poster une annonce
//router.post('/jobs', function (req, res, next) {
    //jobs.create(req.body)
    //.then(function(jobs){
       // res.send(jobs)
   // }).catch(next)
   // })
// mettre à jour une annonce 
//router.put
// supprimer une annonce 
//©router.delete 
//module.exports = router

module.exports = (app) => {
    const jobs = require('../controllers/job.controller.js');


    // Create a new Note
    app.post('/jobs', jobs.create);

    // Retrieve all Notes
    app.get('/jobs', jobs.findAll);

    // Retrieve a single Note with noteId
    app.get('/jobs/:job_postId', jobs.findOne);

    // Update a Note with noteId
    app.put('/jobs/:job_postId', jobs.update);

    // Delete a Note with noteId
    app.delete('/jobs/:job_postId', jobs.delete);


}