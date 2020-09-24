var app = require('express')();
var btoa=require('btoa'),atob=require('atob');
var bp = require('body-parser');
var cp = require('cookie-parser');
var favicon = require('serve-favicon');
var path = require('path')
var fs = require('fs'), util = require('util');
app.use(bp.json());
app.use(bp.urlencoded({
    extended: true
}));
app.use(favicon(path.join(__dirname, 'favicon.ico')))

var _loginInformation = {guest: 'Logan_Guest_',admin: 'freshlybakeddough'};
var banWatch = {};
var banList = [];
var tempTokens = {};
var tempURL = {};

app.use(function(req, res, next) {
    res.setHeader('EGLA_AUTH_TOKEN', 'rebar_'+btoa(Date.now()));
    res.setHeader('Server', 'Ryan (Node 198x.9)');
    res.setHeader('R-TRY-D', uuid(20));
    if(banList.includes(req.connection.remoteAddress)) {
        res.json({auth: false, message: 'you have been banned.'});
    } else {
        next();
    }
});

function uuid(length) {
    var charset = "abcdefghijklmnopqrstuvwrxyz1234567890-----".match(/./g);
    var text = "";
    for (var i = 0; i < length; i++) text += charset[Math.floor(Math.random() * charset.length)];
    return text;
  }

app.get('/', function( res, res) {
    res.sendFile('login.html', {root: __dirname});
})
app.get('/dependencyCSS.CSS', (req, res) => {res.sendFile('system.css', {root: __dirname})})
app.get('/dependencyMAIN.JS', (req, res) => {res.sendFile('system.js', {root: __dirname})})
app.get('/api/v1/dependencyChart', function(req, res) {
    res.sendFile('forChart.json', {root: __dirname});
});
app.get('/api/v1/deepChart', function(req, res) {
    var pT = req.query.request, target = "";
    if(typeof pT === 'string') {
        if(pT === '/') {target = "home"} else {target = pT;}
        res.sendFile('./deep/'+target+'.htm', {root: __dirname});
    } else {}
});
app.get('/api/v1/dep/type=*', function(req,res) {
    var file = req.originalUrl.split('=')[1] + '.js';
    res.sendFile(file, {root: __dirname});
});
app.get('/api/v1/extraloader/target=*', function(req,res) {
    res.sendFile('universalCDN.js', {root: __dirname});
});
app.get('/sounds/*', function(req, res) {
    var tar = req.originalUrl.split('/');
    tar = './sounds/'+tar[tar.length-1];
    var stat = fs.statSync(tar);

    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size
    });

    var rS = fs.createReadStream(tar);
    rS.pipe(res);
});
app.get('/api/v1/getDeep', function(req, res) {
    res.sendFile('/deep/'+req.query.file, {root: __dirname});
});
app.get('/archive', function(req, res) {
    var auth = req.query.auth_token_keycode;
    console.log(tempURL);
    var included = function() {
        var b = false, c=null;
        for(let i=0; i<=Object.values(tempURL).length-1; i++) {
            if(Object.values(tempURL)[i] === auth) {
                b = true;
                c=i;
            }
        }
        return [b,c];
    }
    var f = included();
    console.log(f);
    if(!f[0]) {
        res.json({auth: false, message: 'BRUH GET YOUR ASS OUTTA HERE TRYNA BREAK INTO MY SHIT FUCK OUTTA HERE. PULL THIS SHIT AGAIN SEE WHAT HAPPENS HOMIE THIS MOTHER FUCKER IS LOCKED. Regards, Ryan Wans .'})
    } else {
        delete tempURL[f[1]];
        res.sendFile('archive.html', {root: __dirname});
    }
    console.log(tempURL);
});
app.post('/api/v1/loginportal-version2', function(req, res) {
    req.body = (JSON.parse(Object.keys(req.body)[0]));
    console.log(req.body)
    if(req.body.pw === _loginInformation.guest) {
        var bb = btoa("RyanHandshake "+ Date.now()+"-"+uuid(220));
        tempTokens[Object.values(tempTokens).length] = bb;
        res.cookie('rw_r', btoa('_____guest'));
        res.json({pass: true, auth: bb, continue: true, prefix: '_____', rank: btoa('guest'), redir: '/home', head: 'X-Temp-Encoded-Auth'});
    } else if (req.body.pw === _loginInformation.admin) {
        var bb = btoa("RyanHandshake "+Date.now()+"-"+uuid(220));
        tempTokens[Object.values(tempTokens).length] = bb;
        res.cookie('rw_r', btoa('_____admin'));
        res.json({pass: true, auth: bb, continue: true, prefix: '_____', rank: btoa('admin'), redir: '/home', head: 'X-Temp-Encoded-Auth'});
    } else {
        if(typeof req.body.r !== "undefined") {
            var included = function() {
                var b = false, c=null;
                for(let i=0; i<=Object.values(banWatch).length-1; i++) {
                    if(Object.values(banWatch)[i].split("__")[0] === req.connection.remoteAddress) {
                        b = true;
                        c=i;
                    }
                }
                return [b,c];
            }
            var f = included();
            if(f[0]) {
                var r = Object.values(banWatch)[f[1]].split("__")[1]-1;
                banWatch[f[1]] = req.connection.remoteAddress +"__"+r;
                res.json({pass: false, remaining: r});
                if(r === 0) {
                    banList.push(req.connection.remoteAddress);
                }
            } else {
                res.json({pass: false, remaining: 3});
                console.log('failed')
            }
        } else if (req.body.r === 0) {
            banList.push(req.connection.remoteAddress);
            res.json({pass: false, banned: true});
        } else {
            res.json({pass: false, remaining: 3});
            var n = Object.keys(banWatch).length;
            banWatch[n] = req.connection.remoteAddress+"__3";
        }
        
    }
});
app.post('/api/v1/tempHotURL', function(req, res) {
    var auth = req.headers["ryanwans-handshake-auth"];
    auth = btoa(auth);
    var included = function() {
        var b = false, c=null;
        for(let i=0; i<=Object.values(tempTokens).length-1; i++) {
            if(Object.values(tempTokens)[i].split("__")[0] === auth) {
                b = true;
                c=i;
            }
        }
        return [b,c];
    }
    if(included()) {
        var token = uuid(20);
        tempURL[Object.values(tempURL).length] = token;
        res.json({
            pass: true,
            redir: '/archive?auth_token_keycode='+token
        });

    } else {
        res.json({pass: false, banned: true});
        banList.push(req.connection.remoteAddress);
    }
});

app.listen(9000, () => {console.log('[ryanwans-api] nectar-build completed')});