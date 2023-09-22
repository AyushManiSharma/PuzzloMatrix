const router = require('express').Router();
const path = require('path');

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
    // Here, index.html is rendered
    res.sendFile(path.join(__dirname, '../index.html'));
  });

router.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, '../webpage/login/login.html'))
});

router.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname, '../webpage/register/register.html'))
});

router.get('/category', (req,res) => {
    res.sendFile(path.join(__dirname, '../webpage/category/category.html'))
});

module.exports = router;