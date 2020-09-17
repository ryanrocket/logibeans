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
app.get('/api/v1/dependencyChart', function(req, res) {
    res.json({
        '/': {
            jQuery: true,
            locked: false,
            forceAccount: false,
            staffOnly: false,
            websocketEnabled: {
                go: false,
                minPing: 50,
                store: false
            },
            name: 'login',
            UMDATA: null,
            getter: '/api/v1/deepChart?request=',
            
        }
    })
});

app.listen(9000, () => {console.log('[ryanwans-api] nectar-build completed')});