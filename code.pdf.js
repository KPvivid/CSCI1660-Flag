sendRequest();

function sendRequest() {
  var data = null;
  var bob = new XMLHttpRequest();
  var xhr = new XMLHttpRequest();

  bob.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.open("POST", "https://hookb.in/037Oqjgpn9f3J0ooPpYP", true);

  bob.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          data = this.response;
          xhr.send(data);
        }
  }
  bob.send();
}
