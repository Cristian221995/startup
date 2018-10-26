let social = {
  share: function (friendName) {
    console.log(`Share ${this.title} with ${friendName}.`);
  },
  like: function (friendName) {
    console.log(`${friendName} likes ${this.title}.`);
  }
};