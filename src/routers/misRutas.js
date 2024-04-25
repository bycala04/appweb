const express = require("express");
const router = express.Router();

const misRutasControler = require('../controler/misRutasControler');

router 
    //
    .get('/',misRutasControler.gethome)
    .get('/login',misRutasControler.getlogin)
    .get('/products',misRutasControler.getproducts)
    .get('/register',misRutasControler.getregister)
    .get('/list',misRutasControler.getlist)
    .get('/specificcontent',misRutasControler.getspecificcontent)

module.exports = router;