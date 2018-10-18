function fadeInOnLoad(){  //fade in "Hello World" on load.
    setInterval( function() {
      let element = document.getElementById("hide");
      element.classList.remove("hidden");
    },500);
    
  }

  function alerta(){
    alert("Warning");
  }

