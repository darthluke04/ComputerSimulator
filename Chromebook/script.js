/* Main javascript (onload Events) */
function main() {
	signIn();
}

function signIn() {
	if(getCookie("Username") != ""){
		window.location.href = "Desktop/index.html";
	}
}

/* Cookie funcions */
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function signUp() {
  var username = document.getElementById("signUpUser").value;
  var password = document.getElementById("signUpPass").value;
  if((username != "") && (password != "")){
    //creating cookie for username
    setCookie("Username", username, 99999999);
		setCookie("Password", password, 99999999);

    //loading desktop
    window.location.href = "Desktop/index.html";
  }
}

function signOut() {
  //creating cookie for username
  setCookie("Username", "", 99999999);
  setCookie("Password", "", 99999999);
}