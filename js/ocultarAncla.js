
window.onscroll = function() {
    scrollFunction();
  }; 

function scrollFunction() {
  var ocultar = document.getElementById("flecha");
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    ocultar.style.display = "inline";
  } else {
    ocultar.style.display = "none";
  }
}