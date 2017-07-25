var Park = function() {
  this.enclosure = [];
}

Park.prototype = {

  addDino: function(dinosaur) {
    this.enclosure.push(dinosaur);
  },

  removeType: function(type) {
    for(var i = this.enclosure.length -1; i >= 0; i--) {
      var dinosaur = this.enclosure[i];
      if(dinosaur.type === type) {
        this.enclosure.splice(i, 1);
      }
    }
  },
  findDinoWithMoreThanTwo: function() {
    
  }
}

module.exports = Park;