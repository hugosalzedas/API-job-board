const db = require("../models/");
const Messages = db.messages;


const { Op } = require("sequelize");
const messages = require("../models/messages");

// Create and Save a new company
exports.create = (req, res) => {
    if (!req.body.cors) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

      // Create a company
      const messages = {
        cors: req.body.cors,
      };
    
      // Save company in the database
      Messages.create(messages)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the message."
          });
        });
  
};

// Retrieve all companies from the database.
exports.findAll = (req, res) => {
    const cors = req.query.cors;
  var condition = cors ? { cors: { [Op.like]: `%${cors}%` } } : null;

  Messages.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the messages."
      });
    });

  
};

// Find a single User  with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Messages.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find message with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving message with id=" + id
        });
      });
  
};



// Delete a Company with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Messages.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Message was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete message with id=${id}. Maybe message was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete message with id=" + id
        });
      });
};

// Delete all Messages from the database.
exports.deleteAll = (req, res) => {
    Messages.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Messsages were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all the messages."
          });
        });
};

