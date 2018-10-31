(function() {

    var refresh = window.sessionStorage.getItem('refresh_token');
    var XHR = new XMLHttpRequest();

    XHR.onload = function() {
        var json = JSON.parse(this.responseText);
        if (json.hasOwnProperty('access_token') && this.status === 200) {
            var access_token = json.access_token;
            if (access_token.trim() !== '') {
                window.sessionStorage.setItem('access_token', access_token)
            }
        }
    }
    
    setInterval(function() {
        XHR.open('GET', window.location.origin + '/refresh_token?refresh_token=' + refresh);
        XHR.send();
    }, 25 * 60000);

})();