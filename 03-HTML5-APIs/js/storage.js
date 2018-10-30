//IndexedDB
var bd;
function openIndexedDB(){
    saveButton=document.getElementById("saveButton");
    saveButton.addEventListener("click",addObject,false);
    var request=indexedDB.open("myBD");
    request.onsuccess=function(e){
        bd=e.target.result;
    }
    request.onupgradeneeded=function(e){
        bd=e.target.result;
        bd.createObjectStore("text", {keyPath:"textToSave"});
    }
    console.log("IndexedDB created");
}

function addObject(){
    var textToSave=document.getElementById("textToSave").value;

    var transaccion=bd.transaction(["text"],"readwrite");

    var alm=transaccion.objectStore("text");

    var objectAdd=alm.add({textToSave: textToSave});
}

function deleteIndexedDB(){
    clearButton=document.getElementById("clearButton");
    clearButton.addEventListener("click",clearData,false);
}

function clearData(){
    var transaction = db.transaction(["text"], 'readwrite');
    var objectStore = transaction.objectStore("text");
    var request = objectStore.clear();
    request.onerror = function(event) {
      // Handle errors!
      console.log("Error: something went wrong");
    };
    request.onsuccess = function(event) {
      // Do something with the request.result!
      console.log("data cleared!");
      document.getElementById("textToSave").value = "";
    };
}

//LocalStorage
function openLocalStorage(){
    var saveButton=document.getElementById("saveButton");
    saveButton.addEventListener("click",addObjectLS,false);
    console.log("Local Storage created");
}

function addObjectLS(){
    var key= "text";
    var text=document.getElementById("textToSave").value;
    localStorage.setItem(key,text);
}

function deleteLocalStorage(){
    var clearButton=document.getElementById("saveButton");
    clearButton.addEventListener("click",clearLocalStorage,false);
}

function clearLocalStorage(){
    localStorage.clear();
}

window.addEventListener("load",openIndexedDB,false);
window.addEventListener("load",openLocalStorage,false);
