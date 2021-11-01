const db = require("../models/");
const Companies = db.companies;


const { Op } = require("sequelize");

// Create and Save a new company
exports.create = (req, res) => {
    if (!req.body.company_name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      if (!req.body.profile_description) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      if (!req.body.business_stream_name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
}
      // Create a company
      const companies = {
        company_name: req.body.company_name,
        profile_description: req.body.profile_description,
        etablishment_date: req.body.etablishment_date,
        company_website_url: req.body.company_website_url,
        business_stream_name: req.body.business_stream_name,

      };
    
      // Save company in the database
      Companies.create(companies)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the company profile."
          });
        });
  
};

// Retrieve all companies from the database.
exports.findAll = (req, res) => {
    const company_name = req.query.company_name;
  var condition = company_name ? { company_name: { [Op.like]: `%${company_name}%` } } : null;

  Companies.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the companies."
      });
    });

  
};

// Find a single User  with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Companies.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find company with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving company with id=" + id
        });
      });
  
};

// Update a Job by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

  Companies.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Company was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update company post with id=${id}. Maybe company post was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating company with id=" + id
      });
    });
  
};

// Delete a Company with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Companies.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Company was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete company with id=${id}. Maybe company was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete company with id=" + id
        });
      });
};

// Delete all Company from the database.
exports.deleteAll = (req, res) => {
    Companies.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Company were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all company."
          });
        });
};


