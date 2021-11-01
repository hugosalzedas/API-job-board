var db = require('../models/');
var Job = db.jobs;
exports.create= (req, res) => {
console.log("body" + req.body)

if(!req.body.description) {
    return res.status(400).send({
        message: "Note content can not be empty"
    });
}
const job = {
    name: req.body.name || "Untitled job", 
    description: req.body.description,
    location: req.body.location,
    isavailable: req.body.isavailable? req.body.isavailable : yes};
    
Job.create(job)
.then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial."
    });
  });
    
};

exports.findAll = (req, res) => {
    job.find()
    .then(jobs => {
        res.send(jobs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving jobs."
        });
    });
};
exports.findOne = (req, res) => {
    Job.findById(req.params.job_postId)
    .then(job => {
        if(!job) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.job_postId
            });            
        }
        res.send(job);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.job_postId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.job_postId
        });
    });

};
exports.update = (req, res) => {
    if(!req.body.description) {
        return res.status(400).send({
            message: "job content can not be empty"
        });
    }

    // Find note and update it with the request body
    Job.findByIdAndUpdate(req.params.job_postId, {
        name: req.body.name || "Untitled job", 
        description: req.body.description,
        location: req.body.location,
    }, {new: true})
    .then(job => {
        if(!job) {
            return res.status(404).send({
                message: "job not found with id " + req.params.job_postId
            });
        }
        res.send(job);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.job_postId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.job_postId
        });
    });
};
exports.delete = (req, res) => {
    Job.findByIdAndRemove(req.params.job_postId)
    .then(job => {
        if(!job) {
            return res.status(404).send({
                message: "Job not found with id " + req.params.job_postId
            });
        }
        res.send({message: "Job deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.job_postId
            });                
        }
        return res.status(500).send({
            message: "Could not delete job with id " + req.params.job_postId
        });
    });
};