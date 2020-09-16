!function() {
    console.log('Ryan RocketLoader - v4.0 loaded!');
    var _page = window.location.pathname.split('/');
    _page=_page[_page.length-1];
    (_page === "" && typeof _page === "string") ? _page="/" : _page=_page;
    console.log('Ryan RocketLoader - Loading dependencies for target '+_page);
}()