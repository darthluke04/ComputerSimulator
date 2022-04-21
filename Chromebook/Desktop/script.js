/* Main javascript (onload Events) */
function main() {
  getCurrentWallpaper();
  menuMore();
}

function menuMore(){
  getDate("desktopMenu-More-Time");
  getBattery();
  getWifi();
}

/* DEBUG MODE (.body overflow-x, overflow-y) */
function debugMode(mode){
  if(mode == true){
    document.getElementById("body").className = "body-debug";
  } else if(mode == false){
    document.getElementById("body").className = "body";
  }
  console.log("Debug mode is set to: " + mode);
}

/* right click event on desktop */
function deskClick() {
    if (document.addEventListener) {
        document.addEventListener('contextmenu', function(e) {
            rightClick("open");
            e.preventDefault();
        }, false);
    } else {
        document.attachEvent('oncontextmenu', function(e) {
            rightClick("close");
            window.event.returnValue = false;
        });
    }
}

function openApp(app) {
 if(app == "Chrome") {
   document.getElementById("window-App").style.display = "block";
   document.getElementById("chrome-iframe").src = "https://www.youtube.com/embed/uD4izuDMUQA?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0";
 }
}


function rightClick(toggle) {
    var mouseX = event.clientX;     // Get the horizontal coordinate
    var mouseY = event.clientY;     // Get the vertical coordinate
    if(toggle == "open") {
        document.getElementById("rightClick").style.left = mouseX + "px";
        document.getElementById("rightClick").style.top = mouseY + "px";
        document.getElementById("rightClick").style.display = "block"; //here you draw your own menu
    }
    if(toggle == "close") {
        document.getElementById("rightClick").style.display = "none"; //here you draw your own menu
    }
}

/* wallpaper settings */
function openWallpaper() {
    document.getElementById("settingsWallpaper").style.display = "block";
    rightClick('close');
}

function closeWallpaper() {
    document.getElementById("settingsWallpaper").style.display = "none";
}

function closeWindowApp() {
    document.getElementById("window-App").style.display = "none";
    document.getElementById("chrome-iframe").src = "none";
}

function changeWallpaper(path) {
    document.getElementById("background").src = "img/" + path;
    getCurrentWallpaper();
}

var currentImg = "";

function getCurrentWallpaper(){
    var fullPath = document.getElementById("background").src;
    var filename = fullPath.replace(/^.*[\\\/]/, '');
    document.getElementById("currentImgName").innerHTML = "\"" + filename + "\"";
    document.getElementById("currentImg").src = fullPath;
};

function svgHover(id){
  if(id == "settingsMinimize"){
    //document.getElementById(id).innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#949494'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M6 19h12v2H6v-2z'/></svg>";
    document.getElementById(id + "_img").src = "img/minimize_black_24dp.svg";
  } else if(id == "settingsFull"){
    //document.getElementById(id).innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#949494'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z'/></svg>";
    document.getElementById(id + "_img").src = "img/fullscreen_black_24dp.svg";
  } else if(id == "settingsExit"){
    //document.getElementById(id).innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#949494'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'/></svg>";
    document.getElementById(id + "_img").src = "img/close_black_24dp.svg";
  }
}

function svgLeave(id){
  if(id == "settingsMinimize"){
    //document.getElementById(id).innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M6 19h12v2H6v-2z'/></svg>";
  } else if(id == "settingsFull"){
    //document.getElementById(id).innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z'/></svg>";
  } else if(id == "settingsExit"){
    //document.getElementById(id).innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'/></svg>";
  }
}


function changeShelfPos(){
  alert("you clicked \"Shelf Position\"");
}

function autohideShelf(){
  alert("you clicked \"Autohide Shelf\"");
}


const log = document.getElementById('log');

document.addEventListener('keydown', logKey);

function logKey(e) {
  if(`${e.code}` == "MetaLeft"){
    toggleSearchApps();
  }
}

function toggleSearchApps() {
  if(document.getElementById("searchApps").className == "searchApps-Closed"){
    document.getElementById("searchApps").className = "searchApps-Open";
  } else if(document.getElementById("searchApps").className == "searchApps-Open"){
    document.getElementById("searchApps").className = "searchApps-Closed"
  }
}


/* Backgorund Image Input */
function showPreview(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("background");
    preview.src = src;
    preview.style.display = "block";
    getCurrentWallpaper();
  }
}


/* Get Time & Date */
function getDate(id) {
  var today = new Date();
  var date = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();
  var timeH = 0;
  
  if(today.getHours() == "13"){
    timeH = "1";
    var AMPM = "PM";
  } else if(today.getHours() == "14"){
    timeH = "2";
    var AMPM = "PM";
  } else if(today.getHours() == "15"){
    timeH = "3";
    var AMPM = "PM";
  } else if(today.getHours() == "16"){
    timeH = "4";
    var AMPM = "PM";
  } else if(today.getHours() == "17"){
    timeH = "5";
    var AMPM = "PM";
  } else if(today.getHours() == "18"){
    timeH = "6";
    var AMPM = "PM";
  } else if(today.getHours() == "19"){
    timeH = "7";
    var AMPM = "PM";
  } else if(today.getHours() == "20"){
    timeH = "8";
    var AMPM = "PM";
  } else if(today.getHours() == "21"){
    timeH = "9";
    var AMPM = "PM";
  } else if(today.getHours() == "22"){
    timeH = "10";
    var AMPM = "PM";
  } else if(today.getHours() == "23"){
    timeH = "11";
    var AMPM = "PM";
  } else if(today.getHours() == "24"){
    timeH = "12";
    var AMPM = "PM";
  } else {
    timeH = today.getHours();
    var AMPM = "AM";
  }
  
  var timeHMS = timeH + ":" + today.getMinutes() + ":" + today.getSeconds();
  var timeHM = today.getHours() + ":" + today.getMinutes();
  
  if(today.getMinutes() <= 9){
    var timeM = "0" + today.getMinutes();
  } else {
    var timeM = today.getMinutes();
  }
  
  if(id == "desktopMenu-More-Time") {
    document.getElementById(id).innerHTML = timeH + ":" + timeM + " " + AMPM;
  } else if(id == "hoverMenu-Text") {
    changeHoverMenu(date + "<br> " + timeHMS + " " + AMPM, "open");
  }
}


/* Get Battery Percentage */
function getBattery() {
  navigator.getBattery()
    .then(function(battery) {
    var batteryLvl = battery.level;
    var batteryCharging = battery.charging;
    if(battery.charging == true){
      document.getElementById("desktopMenu-More-Batt").src = "img/battery_charging_full_white_24dp.svg";
    } else if(battery.charging == false){
      if(batteryLvl == 1.00) {
        document.getElementById("desktopMenu-More-Batt").src = "img/battery_full_white_24dp.svg";

      } else if((batteryLvl >= 0.90) && (batteryLvl <= 0.99)){
        document.getElementById("desktopMenu-More-Batt").src = "img/battery_6_bar_white_24dp.svg";

      } else if((batteryLvl >= 0.50) && (batteryLvl <= 0.89)){
        document.getElementById("desktopMenu-More-Batt").src = "img/battery_3_bar_white_24dp.svg";

      } else if((batteryLvl >= 0.30) && (batteryLvl <= 0.49)){
        document.getElementById("desktopMenu-More-Batt").src = "img/battery_2_bar_white_24dp.svg";

      } else if((batteryLvl >= 0.15) && (batteryLvl <= 0.29)){
        document.getElementById("desktopMenu-More-Batt").src = "img/battery_1_bar_white_24dp.svg";

      } else if((batteryLvl >= 0.14) && (batteryLvl <= 0.00)){
        document.getElementById("desktopMenu-More-Batt").src = "img/battery_0_bar_white_24dp.svg";

      }
    }
  });
}

function hoverMenuBatteryGet() {
    navigator.getBattery()
    .then(function battery(battery) {
      var batteryLevel = battery.level;
      hoverMenuBatterySet(battery.level, battery.charging, Math.round((battery.dischargingTime / 60)), battery.chargingTime);
  });
}

function hoverMenuBatterySet(percent, charging, discharge, chargingTime){
  changeHoverMenu("Battery: " + (percent * 100) + "%" + "<br>" + checkBatteryDischarge(discharge, chargingTime, charging) + "<br>" + "Charging: " + charging, "open");
}

function hoverMenuWifiSet(text){
  if(navigator.onLine){
    changeHoverMenu(getNetworkInfo("type") + "<br>" + "Wifi: " + "Connected" + "<br>" + getNetworkInfo("downlink"), "open");
  } else {
    changeHoverMenu(getNetworkInfo("type") + "<br>" + "Wifi: " + "Disconnected" + "<br>" + getNetworkInfo("downlink"), "open");
  }
}

/* Change Hover Menu */
function changeHoverMenu(text, toggle) {
    var mouseX = event.clientX;     // Get the horizontal coordinate
    var mouseY = event.clientY;     // Get the vertical coordinate
    if(toggle == "open") {
        document.getElementById("hoverMenu-Text").style.left = (mouseX - 30) + "px";
        document.getElementById("hoverMenu-Text").style.top = (mouseY - 100) + "px";
        document.getElementById("hoverMenu-Text").style.display = "block"; //here you draw your own menu
        //navigator.getBattery().then(function(battery) {document.getElementById("hoverMenu-Text").innerHTML = battery.level}
        document.getElementById("hoverMenu-Text").innerHTML = text;
    }
    if(toggle == "close") {
        document.getElementById("hoverMenu-Text").style.display = "none"; //here you draw your own menu
    }
}

/* Get Wifi Online Boolean */
function getWifi() {
  if (navigator.onLine) {
    document.getElementById("desktopMenu-More-Wifi").src = "img/signal_wifi_4_bar_white_24dp.svg";
  } else {
    document.getElementById("desktopMenu-More-Wifi").src = "img/signal_wifi_bad_white_24dp.svg";
  }
  //console.log("Connection: " + Navigator.connection + "<br>" + getNetworkInfo("type"));
}

navigator.connection.addEventListener('change', getNetworkInfo);

function getNetworkInfo(value) {
  if(value == "type") {
    // Network type that browser uses
    return('         Type: ' + navigator.connection.type);
    
  } else if(value == "downlink") {
    // Effective bandwidth estimate
    return('     Speed: ' + navigator.connection.downlink + ' Mb/s');
    
  } else if(value == "rtt") {
    // Effective round-trip time estimate
    return('          Rtt: ' + navigator.connection.rtt + ' ms');
    
  } else if(value == "downlinkMax") {
    // Upper bound on the downlink speed of the first network hop
    return('  DownlinkMax: ' + navigator.connection.downlinkMax + ' Mb/s');
    
  } else if(value == "effectiveType") {
    // Effective connection type determined using a combination of recently
    // observed rtt and downlink values: ' +
    return('EffectiveType: ' + navigator.connection.effectiveType);
    
  } else if(value == "saveData") {
    // True if the user has requested a reduced data usage mode from the user
    // agent.
    return('     SaveData: ' + navigator.connection.saveData);
    
  } else if(value == "") {
    // Add whitespace for readability
    return('');
    
  }
}

function checkBatteryDischarge(dischargingTime, chargingTime, charging) {
  if(dischargingTime == "Infinity"){
    if(charging) {
      var h = Math.floor(chargingTime / 60);
      var m = chargingTime % 60;
      h = h < 10  ? '0' + h : h; 
      m = m < 10 ? '0' + m : m; 
      return h + " Min" + " Left";
    } else {
      return "Calculating..."
    }
  } else {
    if(!charging) {
      var h = Math.floor(dischargingTime / 60);
      var m = dischargingTime % 60;
      h = h < 10  ? '0' + h : h; 
      m = m < 10 ? '0' + m : m; 
      return h + ':' + m + " Left";
    } else {
      return "Calculating...";
    }
  }
}

/* Convert Minutes to Hours : Minutes */
function convMintoHrs(minutes) {
  var h = Math.floor(minutes / 60);
  var m = minutes % 60;
  h = h < 10  ? '0' + h : h; 
  m = m < 10 ? '0' + m : m; 
  return h + ':' + m;
}

/* searchApp Chrome Look Up on Google */
function googleSearch(string) {
  let url;
  if(string != ""){
    try {
      url = new URL(string);
      window.open(url, '_blank')
    } catch (_) {
      if(string.includes(".")){
        window.open("https://" + string, '_blank');
        return false;
      } else {
        window.open("https://www.google.com/search?q=" + string, '_blank');
        return false;
      }
    }
  }
}

/* toggle menu more options */
function toggleMoreOptions() {
  if(document.getElementById("desktopMenu-More-Options").className == "desktopMenu-More-Options-Closed"){
    document.getElementById("desktopMenu-More-Options").className = "desktopMenu-More-Options-Open";
    document.getElementById("desktopMenu-More-Options-Acc").className = "desktopMenu-More-Options-Acc-Open";
    document.getElementById("desktopMenu-More-Options-SignOut").className = "desktopMenu-More-Options-SignOut-Open";
    document.getElementById("desktopMenu-More-Options-Power").className = "desktopMenu-More-Options-Power-Open";
    document.getElementById("desktopMenu-More-Options-Lock").className = "desktopMenu-More-Options-Lock-Open";
    document.getElementById("desktopMenu-More-Options-Settings").className = "desktopMenu-More-Options-Settings-Open";
    $("#desktopMenu-More-Options-SignOut-Inner").html("Sign out");
  } else if(document.getElementById("desktopMenu-More-Options").className == "desktopMenu-More-Options-Open"){
    document.getElementById("desktopMenu-More-Options").className = "desktopMenu-More-Options-Closed";
    document.getElementById("desktopMenu-More-Options-Acc").className = "desktopMenu-More-Options-Acc-Closed";
    document.getElementById("desktopMenu-More-Options-SignOut").className = "desktopMenu-More-Options-SignOut-Closed";
    document.getElementById("desktopMenu-More-Options-Power").className = "desktopMenu-More-Options-Power-Closed";
    document.getElementById("desktopMenu-More-Options-Lock").className = "desktopMenu-More-Options-Lock-Closed";
    document.getElementById("desktopMenu-More-Options-Settings").className = "desktopMenu-More-Options-Settings-Closed";/* Updated*/
    $("#desktopMenu-More-Options-SignOut-Inner").html("");
  }
}

/* Power */
function power() {
  window.close();
}

/* Sign Out */
function logOut() {
  setCookie("Username", "", 0);
  setCookie("Password", "", 0);
  window.location.href = "../../index.html";
}

/* Lock */
function lock() {
  setCookie("Username", "", 0);
  setCookie("Password", "", 0);
  window.location.href = "../index.html";
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
