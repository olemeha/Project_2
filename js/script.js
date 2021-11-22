function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function myAboutClick(){
	window.location.href="about.html";
}
function myContactClick(){
	window.location.href="contact.html";
}	
function myLogoClick(){
	window.location.href="index.html";
}