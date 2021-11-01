const db = require("../models/");
const Locations = db.locations;


const { Op } = require("sequelize");

// Create and Save a new company
exports.create = (req, res) => {
    if (!req.body.adress) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      if (!req.body.city) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      if (!req.body.region) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
}
    if (!req.body.country) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }
    if (!req.body.zip_code) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }

      // Create a location
      const locations = {
        adress: req.body.adress,
        city: req.body.city,
        region: req.body.region,
        country: req.body.country,
        zip_code: req.body.zip_code,

      };
    
      // Save company in the database
      Locations.create(locations)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the location."
          });
        });
  
};

// Retrieve all companies from the database.
exports.findAll = (req, res) => {
    const city = req.query.city;
  var condition = city ? { city: { [Op.like]: `%${city}%` } } : null;

  Locations.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the locations."
      });
    });

  
};

// Find a single User  with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Locations.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find location with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving location with id=" + id
        });
      });
  
};

// Update a Job by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

  Locations.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Location was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update location post with id=${id}. Maybe location post was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating location with id=" + id
      });
    });
  
};

// Delete a Company with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Locations.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Location was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete location with id=${id}. Maybe location was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete location with id=" + id
        });
      });
};

// Delete all Company from the database.
exports.deleteAll = (req, res) => {
    Locations.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Location were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all location."
          });
        });
};


