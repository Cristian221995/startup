class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

}
;
class EventEmmiter {
  constructor() {
    this.events = {};
  }

  on(eventName, listener) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(listener); //cambio
  }

  emit(eventName) {
    let event = this.events[eventName];

    if (event) {
      event.forEach(function (fn) {
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
      }
    }
  }

}
class Logger {
  constructor() {}

  log(info) {
    console.log('The ' + info + ' event has been emited');
  }

}
class Movie extends EventEmmiter {
  constructor(title, year, duration) {
    super();
    this.title = title, this.year = year, this.duration = duration, this.cast = [];
  }

  play() {
    this.emit('play');
  }

  pause() {
    this.emit('pause');
  }

  resume() {
    this.emit('resume');
  }

  addCast(actor) {
    //src: https://stackoverflow.com/questions/4775722/check-if-object-is-array
    if (Array.isArray(actor)) //check if is an array of actors
      {
        this.cast = this.cast.concat(actor);
      } else {
      this.cast.push(actor);
    }
  }

}
let social = {
  share: function (friendName) {
    console.log(`Share ${this.title} with ${friendName}.`);
  },
  like: function (friendName) {
    console.log(`${friendName} likes ${this.title}.`);
  }
};
