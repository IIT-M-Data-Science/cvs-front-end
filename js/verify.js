function verify_certificate() {
  
}


var path = window.location.pathname.split("/")[1];
if (path) {
  document.getElementById("cert-id").value = path;
}