class Movie {
    constructor(title, year, duration) {
        this.title = title,
        this.year = year,
        this.duration = duration
    }

    play(){
        this.emit('play');
    }
    
    pause(){
        this.emit('pause');
    }
    
    resume(){
        this.emit('resume');
    }

}

var movie1 = new Movie("The Dark Night", 2012, "2hs");

theDarkNight.play;

class Actor{
    constructor(name,age){
      this.name = name;
      this.age = age;
    }
  };

  var actor1 = new Actor("Christian Bale", 30);

  class EventEmmiter {
    constructor(){
      this.events = {};
    }
  
  
    on(eventName, listener){
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(listener); //cambio
    }
  
    emit(eventName) {
      let event = this.events[eventName];
      if (event) {
        event.forEach(function(fn) {
          fn(eventName);
        });
      }
    }
  
    off(eventName, callBack) {
      if (this.events[eventName]) {
        for (var i = 0; i < this.events[eventName].length; i++) {
          if (this.events[eventName][i] === callBack) {
            this.events[eventName].splice(i, 1);
            break;
          }
        };
      }
    }
    }