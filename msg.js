function showMsg(type, msg) {
  document.querySelector(".mask").style.display="flex";
  document.querySelector(".msg-heading").innerHTML=type;
  document.querySelector(".msg").innerHTML=msg;
}

function back() {
  document.querySelector(".mask").style.display="none";
}