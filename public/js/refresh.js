(function() {

    function sendRefresh(xhr) {
        var refresh = window.sessionStorage.getItem('refresh_token');
        if (typeof refresh !== 'undefined' && refresh !== 'undefined') {
            xhr.open('GET', window.location.origin + '/refresh_token?refresh_token=' + refresh);
            xhr.send();
        }
    }

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
        sendRefresh(XHR);
    }, 25 * 60000);

    window.onload = function() {
        let access_token = window.sessionStorage.getItem('access_token');
        if (typeof access_token === 'undefined' || access_token === 'undefined') {
            if (window.location.pathname !== '/') {
                window.location = '/';
            }
        }
        else {
            sendRefresh(XHR);
        }
    }

})();