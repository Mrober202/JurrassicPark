var Park = function() {
  this.enclosure = [];
  this.moreThanTwo = [];
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
    for(var i =0; i < this.enclosure.length; i++) {
      var dinosaur = this.enclosure[i];
      if (dinosaur.numOfWeans > 2) {
        this.moreThanTwo.push(dinosaur);
      }
    }
  }
}

module.exports = Park;