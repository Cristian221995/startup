function fadeInOnLoad(){  //fade in "Hello World" on load.
    setInterval( function() {
      let element = document.getElementById("hide");
      element.classList.add("hidden");
    },500);
    
  }

  function alerta(){
    alert("Warning");
  }

  function getData() {    //Get random joke form API
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function() {
      if(xhr.readyState == 4 && xhr.status==200)
      {
        console.log("received the response", xhr.responseText);
        let response = JSON.parse(xhr.response);
        document.getElementById("joke").innerHTML = response.value.joke;
      } else {
          console.log("error in processing the request");
      }
    }
    xhr.open("GET","http://api.icndb.com/jokes/random",true);
    xhr.send();
  }
  
  //  info source = https://medium.com/front-end-hacking/ajax-async-callback-promise-e98f8074ebd7
  function getJokePromise(){   //Get random joke from API
    var URL = "http://api.icndb.com/jokes/random"
    makeAjaxCall(URL,"GET").then(renderJoke,errorHandler);
  }
  
  function renderJoke(jokeData){  //Send joke data to html
    document.getElementById("joke").innerHTML = jokeData.value.joke;
  }
  
  function makeAjaxCall(url, methodType){   // Reusable function to perform AJAX calls.
     let promiseObj = new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open(methodType, url, true);
        xhr.send();
        xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
           if (xhr.status === 200){
              console.log("xhr done successfully");
              let resp = xhr.responseText;
              let respJson = JSON.parse(resp);
              resolve(respJson);
           } else {
              reject(xhr.status);
              console.log("xhr failed");
           }
        } else {
           console.log("xhr processing going on");
        }
     }
     console.log("request sent succesfully");
   });
   return promiseObj;
  }
  
  function errorHandler(statusCode){   //Show  'jokeContainer' section background in red when a server error occurs.
    document.getElementById('jokeContainer').element.style.backgroundColor = "red";
  }