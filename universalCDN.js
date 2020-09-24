"use strict";

console.info("Ryan RocketLoader CDN_Version - Loaded!")

const rocket_extrapolated_uve = {
    usageIndex: {'/': 'ph(1)'},
    d: "Sun Mon Tue Wed Thu Fri Sat",
    m: "Jan Feb Mar Apr May Jun Jul Aug Sep Nov Oct Dec",
    r: "Guest User Staff Admin",
    b: "You have been either kicked or banned from this page.",
    t: "Logan Edwards Archive",
    s: "This page is only viewable for staff members.",
    l: "This page has been locked.",
    n: "Image/File is not available.",
    f: "This feature is still under development.",
    ph: (a) => {
        if(typeof jQuery !== 'undefined') {
            // auto assign
        } else {console.error("Cannot use login function with jQuery loaded.")}
        rocket_extrapolated_uve.uni();
        return console.log("Ryan RocketLoader CDN_Version - Dependency function executed.");
    },
    uni: () => {
        window.eere = new Object();
        window.eere.Login = new rocket_extrapolated_uve.Login({url: '/api/v1/loginportal-version2'});
    },
    Login: function(j) {
        this.j = j;
        this.attempts = 3;
        this.lock = () => {
            $('#repl1').text("Login failed. You have been locked out.");
            $('.loginB').prop('disabled',1);
            $('.login').prop('disabled',1);
        },
        this.login = (p) => {
            this.xhr = new XMLHttpRequest();
            this.rType = 'json';
            this.form = {
                pw: p,
                uuid: 0,
                backfor: '_'
            };
            if(this.attempts !== 3) {this.form.r = this.attempts};
            this.xhr.onreadystatechange = () => {
                if(this.xhr.readyState == 4 && this.xhr.status == 200) {
                    this.r = JSON.parse(this.xhr.response);
                    if(this.r.pass) {
                        this.auth = this.r.auth;
                        this.prefix = this.r.prefix;
                        this.rank = this.r.rank;
                        this.redir = this.r.redir;
                        this.cTarget = 'rw_r';
                        this.repo(this.auth, '/api/v1/tempHotURL');
                    } else if(!this.r.pass) {
                        this.tr = this.r.remaining;
                        if(this.tr !== 0) {
                            $('.login').val("");
                            $('#repl1').text("Login failed. "+this.tr+" tries remaining.");
                            this.attempts = this.attempts-1;
                        } else {this.lock();}
                    }
                } else {}
            }
            this.xhr.open('POST', j.url, !0);
            this.xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            this.xhr.send(JSON.stringify(this.form));
        },
        this.repo = (a,b) => {
            this.xhr = new XMLHttpRequest();
            this.rType = 'json';
            this.xhr.onreadystatechange = () => {
                if(this.xhr.readyState == 4 && this.xhr.status == 200) {
                    var v = JSON.parse(this.xhr.response);
                    window.location = v.redir;
                } else {}
            };
            this.xhr.open('POST', b, !0);
            this.xhr.setRequestHeader('RyanWans-Handshake-Auth', atob(a));
            this.xhr.send(null||undefined);
        }
    },
    Sound: function(source, volume, loop) {
        this.source = source;
        this.volume = volume;
        this.loop = loop;
        var son;
        this.son = son;
        this.finish = false;
        this.stop = function(){document.body.removeChild(this.son);}
        this.start = function()
        {
            if (this.finish) return false;
            this.son = document.createElement("audio");
            this.gson = document.createElement("source");
            this.gson.setAttribute('src', this.source);
            // this.son.setAttribute("type", "audio/midi");
            this.son.setAttribute("hidden", "true");
            this.son.setAttribute("volume", this.volume);
            this.son.setAttribute("autostart", "true");
            this.son.setAttribute("loop", this.loop);
            this.son.appendChild(this.gson);
            document.body.appendChild(this.son);
            $(document.body).click();
            this.son.play();
        }
        this.remove = function()
        {
            document.body.removeChild(this.son);
            this.finish = true;
        }
        this.init = function(volume, loop)
        {
            this.finish = false;
            this.volume = volume;
            this.loop = loop;
        }
    },
    l: a => {
        $('#repl1').text('Loading...');
        
        var p = $('.login').val();
        window.eere.Login.login(p);
    },
    lockWindow: function() {
        $('#overlay').css('display', 'block');
        $('.mainTarget').remove();
        $('.navbar').remove();
        $('.rp').remove();
    }
};

!function() {
    if(typeof window.pageNow !== 'undefined') {
        var keys = Object.keys(rocket_extrapolated_uve.usageIndex);
        if(keys.includes(window.pageNow)) {
            var f = 'rocket_extrapolated_uve.'+rocket_extrapolated_uve.usageIndex[window.pageNow];
            window.rocketFunction = f;
            document.body.dispatchEvent(window.buildEvent);
        } else {
            console.warn("Ryan RocketLoader CDN_Version - No dependency function for this file!")
        }
    }else {console.error("Cannot write default execution with window.pageNow var")};
    window.rocketCDN = new Object,
    rocketCDN.fire = (target) => {
        if(target == 'que_music') {
            window.newSound = new rocket_extrapolated_uve.Sound('/sounds/backgroundMusic.mp3', 100, !0);
            window.newSound.start();
            $('.ctp').text("Click to pause");
            $('.log').text("No Time, by Playboi Carti");
            $('.rp').attr('onclick', 'javascript:rocketCDN.fire(\'stop_music\');')
        } else if (target == 'stop_music') {
            window.newSound.stop();
            $('.ctp').text("Click to play");
            $('.log').text("Powered by Ryan Wans");
            $('.rp').attr('onclick', 'javascript:rocketCDN.fire(\'que_music\');')
        } else {
            console.log("[RCDN] Hmmmmm...  we couldn't find this event (not able to fire)");
        }
    }
}()