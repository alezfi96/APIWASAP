const express = require('express');
const router = express.Router();

const apicontroller = require('../controllers/controller');

router
.get("/",apicontroller.verificar)
.post("/",apicontroller.recibir)

module.exports=router;
