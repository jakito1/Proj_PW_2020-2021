const bcrypt = require('bcrypt');
const express = require('express');
const User = require('./user');
const router = express.Router();
const dboperations = require('./dboperations');
const jsonwebtoken = require('jsonwebtoken');
const JWTconfig = require('../JWTconfig');
const VerifyToken = require('./VerifyToken');
var path = require('path');

/*
router.get('/, async (req, res) => {
    res.sendFile(path.join(__dirname + '/../index.html'));
});
router.get('/conta.html', async (req, res) => {
    res.sendFile(path.join(__dirname + '/../conta.html'));
});
router.get('/forum.html', async (req, res) => {
    res.sendFile(path.join(__dirname + '/../forum.html'));
});
router.get('/adicionarPost.html', async (req, res) => {
    res.sendFile(path.join(__dirname + '/../adicionarPost.html'));
});
router.get('/definicoes.html', async (req, res) => {
    res.sendFile(path.join(__dirname + '/../definicoes.html'));
});
router.get('/editarPost.html', async (req, res) => {
    res.sendFile(path.join(__dirname + '/../editarPost.html'));
});
router.get('/eliminarPost.html', async (req, res) => {
    res.sendFile(path.join(__dirname + '/../eliminarPost.html'));
});
router.get('/gestaoUtilizadores.html', async (req, res) => {
    res.sendFile(path.join(__dirname + '/../gestaoUtilizadores.html'));
});*/

router.post("/signup", async (req, res) => {
    const body = req.body;

    if (!(body.email && body.password && body.username)) {
        res.clearCookie('token');
        return res.status(400).send({ error: "Data not formatted properly" });
    }
    let user = {...req.body};
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    dboperations.createUser(user).then(result => {
        if (result.length === 1){
            res.clearCookie('token');
            res.status(201).json(result);
        }else{
            res.clearCookie('token');
            res.status(401).json({ error: "Email already exists" });
        }   
     }).catch(function(){
        res.clearCookie('token');
        res.status(401).json({ error: "Email already exists" });
     })
});

router.post("/login", async (req, res) => {
  const body = req.body;
  let tempUser = await dboperations.getUser(body.email);
  if (Object.keys(tempUser).length) {
    let user = new User(tempUser[0].AEmail, tempUser[0].AUsername, tempUser[0].APassword)
    const validPassword = await bcrypt.compare(body.password, user.password);
    if (validPassword) {
        let token = jsonwebtoken.sign({id: user.email }, JWTconfig.secret, {
            expiresIn: 86400
          });
          res.cookie('token', token, { httpOnly: true });
        res.status(200).send({auth: true});
    } else {
        res.clearCookie('token');
        res.status(401).send({auth: false, error: 'Wrong password'});
    }
  } else {
    res.clearCookie('token');
    res.status(401).json({ error: "User does not exist" });
  }
});

router.get('/logout', VerifyToken, async (req, res) => {
    res.clearCookie('token');
    res.status(200).send({auth: false, message: 'Logged out'});
});

/*
router.get('/me', VerifyToken, async (req, res) => {
    let valid = await dboperations.checkEmail(req.userEmail);
    res.status(200).json(valid);
});
*/

module.exports = router;