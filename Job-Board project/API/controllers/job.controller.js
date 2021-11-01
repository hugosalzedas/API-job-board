const db = require("../models/");
const Job = db.jobs;
const express = require("express");
const app = express();
const { Op } = require("sequelize");
// const cors = require("cors");

// app.use(cors());

// const corsOptions = {
//   origin:"*",
//   optionsSuccessStatus:200,
// }

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  console.log("Test")
  // res.setHeader("Access-Control-Allow-Origin", "*");
  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "Origin, X-Requested-With, Content-Type, Accept"
  // );

  next();
});

// Create and Save a new job
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      // Create a job
      const job = {
        name: req.body.name,
        description: req.body.description,
        location_job: req.body.location_job,
        isavailable: req.body.isavailable ? req.body.isavailable : false
      };
    
      // Save job in the database
      Job.create(job)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the job advertisement."
          });
        });
  
};

// Retrieve all Job from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Job.findAll({ where: condition })
    .then(data => {
      return res.status(201).json(data)
    })
    .catch(err => {
      res.status(500).json({
        message: "Some error occurred while retrieving the job."
      });
    });

  
};

// Find a single Job  with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Job.findByPk(id)
      .then(data => {
        if (data) {
          res.json(data);
        } else {
          res.status(404).json({
            message: `Cannot find job with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "Error retrieving job with id=" + id
        });
      });
  
};

// Update a Job by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

  Job.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Job post was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update job post with id=${id}. Maybe job post was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating job with id=" + id
      });
    });
  
};

// Delete a Job with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Job.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Job advertisement was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Job with id=${id}. Maybe Job was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Job with id=" + id
        });
      });
};

// Delete all Job from the database.
exports.deleteAll = (req, res) => {
    Job.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Jobs were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all jobs advertisements."
          });
        });
};

// Find all published Job
exports.findAllAvailable = (req, res) => {
    Job.findAll({ where: { isavailable: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving jobs advertisements."
      });
    });
};