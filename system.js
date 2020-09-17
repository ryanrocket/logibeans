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
        depTimeout: 1100,
        aftTimeput: 800,
        tmpAuth: btoa(Date.now()+"XX_8267w37863i478g62346"),
        tryAsync: false,
        transferMethod: ['xhr', 'polling', 'fetch'],
        prior: ['page', 'page-inner', 'extra-dep', '$SETUP_WEBSOCKET', 'finals']
    };
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
                var _tar = document.getElementById(pJson.target);
                var _elm = document.createElement("rocketLoadMain");
                _elm.innerHTML = pJson.value;
                _tar.innerHTML = _elm;
            }()) : (!function() {
                var _tar = document.getElementsByClassName(pJson.target);
                var _elm = document.createElement("rocketLoadMain");
                _elm.innerHTML = pJson.value;
                _tar.innerHTML = _elm;
            }())}
    };
    window.rocketLoad = function(a,b,c) {
        if(typeof a !== "number" && a!==1){console.log("Ryan RocketLoader - Loader declined this action");} else {
            _xhr.onreadystatechange = () => {
                if(this.readyState === 4 && this.status === 200) {
                    var output = JSON.parse(this.reponseText);
                    c('depChart',1,output);
                } else {console.warn("Ryan RocketLoader - rocketLoad failed dependency fetch");}
            }
            _xhr.open('GET', b, 1),_xhr.send();}
    };
    window.rlPosXHRScan = (a,b,c) => {

    }
    if(!_jQuery){console.log('Ryan RocketLoader - jQuery not detected, loading wrap-around');};
    window.onload = (self) => {
        _inject({
            jQuery: true,
            method: 'replace',
            target: '#aplogin',
            value: '<span>Loading content...</span>'
        });
        setTimeout(function(main){
            window.rocketLoad(1, "/api/v1/dependencyChart", window.rlPosXHRScan);
        }, _options.depTimeout)
    };
    console.log('Ryan RocketLoader - Loading dependencies for target '+_page);
}()