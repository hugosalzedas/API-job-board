const db = require("../models/");
const User = db.user_types;


const { Op } = require("sequelize");

// Create and Save a new user
exports.create = (req, res) => {
    if (!req.body.username) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      if (!req.body.password) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      if (!req.body.user_email) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      if (!req.body.user_type) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      // Create a user
      const user = {
        username: req.body.username,
        password: req.body.password,
        user_email: req.body.user_email,
        gender: req.body.gender ? req.body.gender : "0",
        contact_number: req.body.contact_number,
        user_type: req.body.user_type,
        first_name: req.body.first_name,
        last_name: req.body.last_name

      };
    
      // Save user in the database
      User.create(user)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the user advertisement."
          });
        });
  
};

// Retrieve all User from the database.
exports.findAll = (req, res) => {
    const username = req.query.username;
  var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

  User.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the user."
      });
    });

  
};

// Find a single User  with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find user with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving user with id=" + id
        });
      });
  
};

// Update a Job by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update user post with id=${id}. Maybe user post was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating user with id=" + id
      });
    });
  
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
};

// Delete all User from the database.
exports.deleteAll = (req, res) => {
    User.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} User were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all users."
          });
        });
};

// Find all published Users
exports.findAllCompanies = (req, res) => {
    User.findAll({ where: { user_type: 'Recruiter' } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the comapnies."
      });
    });
};
exports.findAllSeekers = (req, res) => {
    User.findAll({ where: { user_type: 'Job Seeker' } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the jobs seekers."
      });
    });
};