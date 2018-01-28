const express = require('express');
const routes = require('./routes.js');
const router = express.Router();
router.get('/track', routes.getProviderData);
module.exports = router;
