function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    
    if (event.dataTransfer.items.length > 1) {
      console.log('Max. 1 simultaneous file');
    }
    else { 
      if (event.dataTransfer.items[0].kind === 'file') { //Check if dropped items are files
        var file = event.dataTransfer.items[0].getAsFile();
        console.log(file.name);
  
        var reader = new FileReader();
  
        reader.readAsText(file);
  
        reader.onload = ev => {
          data = reader.result;
        }
      
        reader.onloadend = ev => {
          event.target.innerHTML = data;
        }
      
        reader.onerror = ev => {
          console.log('Reading error');
        }      
      }
    }    
  }