// script.js


function handleIconClick(iconId) {
    switch (iconId) {
      case "facebook":
        window.location.href = "https://www.facebook.com"; 
        break;
      case "insta":
        window.location.href = "https://www.instagram.com"; 
        break;
      case "bird":
        window.location.href = "https://twitter.com"; 
        break;
      default:
        break;
    }
  }
  
  document.getElementById("facebook").addEventListener("click", function () {
    handleIconClick("facebook");
  });
  
  document.getElementById("insta").addEventListener("click", function () {
    handleIconClick("insta");
  });
  
  document.getElementById("bird").addEventListener("click", function () {
    handleIconClick("bird");
  });
  