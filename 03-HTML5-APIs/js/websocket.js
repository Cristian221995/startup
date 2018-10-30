function testWebSocket(msg) {
    var ws = new WebSocket('ws://echo.websocket.org');
  
    ws.onopen = event => {
      console.log('Connected');
      ws.send(msg);
    }
  
    ws.onclose = event => {
      console.log('Disconnected');
    }
  
    ws.onmessage = event => {
      console.log('Receiving message');
      document.getElementById('wsOutput').innerHTML = 'Response: ' + event.data;
    }
  
    ws.onerror = event => {
      console.log('WebSocket error');
    }  
  }