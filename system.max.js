// ==ClosureCompiler==
// @output_file_name default.js
// @compilation_level ADVANCED_OPTIMIZATIONS
// ==/ClosureCompiler==

"use strict";
var _WINDOW;

!function() {
    // default view loader is set to attribute 'rocketload="_target"'
    console.log('Ryan RocketLoader - v4.0 loaded!');
    var _page = window.location.pathname.split('/');
    var _jQuery = (window.jQuery && typeof jQuery !== "undefined") ? true : false;
    _page=_page[_page.length-1];
    (_page === "" && typeof _page === "string") ? _page="/" : _page=_page;
    var _depChartURL = "/api/v1/dependencyChart";
    var _xhr = new XMLHttpRequest();
    var _options = {
        depTimeout: 300,
        aftTimeout: 100,
        tmpAuth: btoa(Date.now()+"XX_8267w37863i478g62346"),
        tryAsync: false,
        transferMethod: ['xhr', 'polling', 'fetch'],
        prior: ['depChart', 'depInner', 'cdnDep', '$SETUP_WEBSOCKET', 'finals']
    };
    !function() {console.log('\n\n%c WARNING! \n', 'background-color:yellow;color: red;font-size:35px;');console.log('%c\nNever paste unknown or intentional Self-XSS code in this console!\n\n', 'font-size:24px;');}();
    window.pageNow = _page
    let __hotreplace_keycode__ = "{$__}";
    let __tempreplace_keycode__ = "%%%";
    const _inject = (pJson) => {
        if(pJson.jQuery && _jQuery) {
            if(typeof pJson.method === "undefined") {
                $(pJson.target).append(pJson.value);
            } else if(pJson.method === "replace") {
                $(pJson.target).html(pJson.value)
            } else {$(pJson.target).append(pJson.value);}} else {
            var ident = pJson.target.split("")[0] || "#";
            if(ident !== '.' || ident !== '#') {ident = "#";}
            (ident === '#') ? (!function() {
              try{
                var _tar = document.getElementById(pJson.target);
                var _elm = document.createElement("rocketLoadMain");
                _elm.innerHTML = pJson.value;
                _tar.innerHTML = _elm;
              }catch(e){}
            }()) : (!function() {
                var _tar = document.getElementsByClassName(pJson.target);
                var _elm = document.createElement("rocketLoadMain");
                _elm.innerHTML = pJson.value;
                _tar.innerHTML = _elm;
            }())}
    };
    window.rocketDataHoisting = (a,b) => {
        setTimeout(function() {_inject({jQuery: window.rocketHoist.jQuery,method: 'replace',target: '#aplogin',value: a});}, _options.aftTimeout)
    };
    window.rocketLoad = function(a,b,c,d,e,f) {
        if(typeof a !== "number" && a!==1){console.log("Ryan RocketLoader - Loader declined this action");} else {
            var _xhr = new XMLHttpRequest();
            _xhr.onreadystatechange = () => {
                if(_xhr.readyState === 4 && _xhr.status === 200) {
                    var _endTime = Date.now();
                    console.log("Ryan RocketLoader - ASYNC LOAD COMPLETED IN "+(_endTime-_startTime)+" MS")
                    var output = _xhr.response;
                    c(e,1,output,d);} else {}}
            if(f === 'json') {_xhr.responseType = f;} else {}
            _xhr.open('GET', b, 1),_xhr.send();}var _startTime = Date.now();
    };
    window.rlPosXHRScan = (a,b,c,d) => {
        if(typeof a !== 'string') {return false;
        } else if (a === 'depChart') {
            if(typeof c !== "object") {return false;} else {
                let t = c[d];
                window.rocketHoist = {
                    jQuery: t.jQuery,
                    locked: t.locked,
                    staffOnly: t.staffOnly,
                    name: t.name,
                    forceAccount: t.forceAccount};
                window.hoistedHotArray = t.hotreplace_config;
                if(t.pageFile.has) {window.rocketLoad(1, t.pageFile.cdn, window.rlPosXHRScan, window.pageNow, 'cdnDep', 'file');} else {}
                window.rocketHoist.wsSettings = t.websocketEnabled;
                window.rocketLoad(1, t.getter+d, window.rlPosXHRScan, window.pageNow, 'depInner', 'string');
            }
        } else if (a === 'depInner') {window.hotReplaceOutterExtrapolatedExpansionFunction(__hotreplace_keycode__, 'HotRepl_', c,d);
        } else if(a === 'cdnDep') {
            try {eval(c);document.body.addEventListener('build', (e) => {
                    var taken = Date.now() - e.detail.start;
                    console.log('Ryan RocketLoader - Building event took '+taken+" MS");
                    eval(window.rocketFunction);
                }, false);} catch(e) {console.warn('Ryan RocketLoader - CDN Script Evaluation Error')};}
    }
    window.hotReplaceOutterExtrapolatedExpansionFunction = (a,b,c,d) => {
        var hotArray = window.hoistedHotArray, l = hotArray.hotArray.length,i=0;
        for (i=0;i<l;i++) {var hot = a.replace("__", b+i);c = c.replace(hot,hotArray.hotArray[i]);}
        // eventually add hoisting cdn's to head
        window.rocketDataHoisting(c,d);
    }
    if(!_jQuery){console.log('Ryan RocketLoader - jQuery not detected, loading wrap-around');};
    window.onload = (self) => {
        _inject({jQuery: true,method: 'replace',target: '#aplogin',value: '<div style="margin-top: 50px">Loading content...</div>'});
        setTimeout(function(main){window.rocketLoad(1, "/api/v1/dependencyChart", window.rlPosXHRScan, window.pageNow, 'depChart', 'json');}, _options.depTimeout)};
    console.log('Ryan RocketLoader - Loading dependencies for target '+_page);
}()