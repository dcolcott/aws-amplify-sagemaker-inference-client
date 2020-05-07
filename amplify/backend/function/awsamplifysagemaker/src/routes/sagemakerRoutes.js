
const express = require('express');
const sagemakerController = require('../controllers/sagemakerController');

const apiv1Router = express.Router();
const { postInference } = sagemakerController();

function router() {
  apiv1Router.route('/inference').post(postInference);

  return apiv1Router;
}

module.exports = router;
