var assert = require("assert");
var Park = require("../park.js")
var Dinosaur = require("../dino.js")

describe("Park", function() {

  var dino1 = new Dinosaur("Tory", 1)
  var dino2 = new Dinosaur("Newspaper", 50)
  var dino3 = new Dinosaur("Stone Roses Fan", 5)
  var dino4 = new Dinosaur("Beta Max", 1)

  var park;
  beforeEach(function() {
    park = new Park();
    park.addDino(dino1);
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.addDino(dino4);
    park.addDino(dino4);
  })

  it("should be able to add a dinosaur", function() {
    park.addDino("People from Aberdeen", 67);
    assert.strictEqual(park.enclosure.length, 7);
  })

  it("should remove all dinosaurs of a particular type", function() {
    park.removeType("Tory");
    assert.strictEqual(park.enclosure.length, 4);
  })

  // it("should get all dinos with more than 2 weans", function() {
  //   park.findDinoWithMoreThanTwo().length;
  //   assert.strictEqual(park)
  // })
})