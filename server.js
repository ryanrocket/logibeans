var app = require('express')();
var btoa=require('btoa'),atob=require('atob');

app.use(function(req, res, next) {
    res.setHeader('EGLA_AUTH_TOKEN', 'rebar_'+btoa(Date.now()));
    next();
});

app.get('/', function( res, res) {
    res.sendFile('login.html', {root: __dirname});
})
app.get('/dependencyCSS.CSS', (req, res) => {res.sendFile('system.css', {root: __dirname})})
app.get('/dependencyMAIN.JS', (req, res) => {res.sendFile('system.js', {root: __dirname})})

app.listen(9000, () => {console.log('[ryanwans-api] nectar-build completed')});