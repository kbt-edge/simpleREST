'use strict';
module.exports = function(app) {
  var simpleREST = require('../controllers/simpleRESTController');

  // contact Routes
  app.route('/contacts')
    .get(simpleREST.list_all_contacts)
    .post(simpleREST.create_a_contact);


  app.route('/contacts/:contactId')
    .get(simpleREST.read_a_contact)
    .put(simpleREST.update_a_contact)
    .delete(simpleREST.delete_a_contact);
};