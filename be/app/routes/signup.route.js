module.exports = (app) => {
  const users = require('../controllers/user.controller.js');

  // Create a new user
  app.post('/new-users', users.create);

}
