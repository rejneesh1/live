const User = require('../models/Users.model.js');

// Create and Save a new Users
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email) {
    return res.status(400).send({
      message: "Please Fill All The Required Fields"
    });
  }

  // Create a User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  // Save User in the database
  user.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while Signing you up."
      });
    });
};

// Retrieve and return all Userss from the database.
exports.findAll = (req, res) => {

};

// Find a single Users with a UsersId
exports.findOne = (req, res) => {

};

// Update a Users identified by the UsersId in the request
exports.update = (req, res) => {

};

// Delete a Users with the specified UsersId in the request
exports.delete = (req, res) => {

};
