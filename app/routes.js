//require express
var express = require('express');
var path = require('path');

//create our router obj
var router = express.Router();

//route our app
router.get('/', function(req, res) {
    // res.send('hello nodemon!');
    // res.sendFile(path.join(__dirname, '../home.html'));
    res.render('pages/home');
});

//route for about page
router.get('/about', function(req, res) {
    // res.send('hello about');
    // res.sendFile(path.join(__dirname, '../about.html'));
//sending data to our about page
    var users = [
        {name: "fernan", email: "fernan@fernan.com", avatar: "img/fernan.jpg"},
        {name: "guibo", email: "guibo@guibo.com", avatar: "img/guibo.jpg"},
        {name: "juanky", email: "juanky@juanky.com", avatar: "img/juanky.jpg"}
    ];
    res.render('pages/about', {users: users});
});

//route for contact page
router.get('/contact', function(req, res) {
    // res.send('hello contact');
    res.render('pages/contact');
});

router.post('/contact', function(req, res) {
    console.log(req.body.message);
    res.send('Thanks for contacting us, ' + req.body.name + '! We will respond shortly');
});

//export router
module.exports = router;
