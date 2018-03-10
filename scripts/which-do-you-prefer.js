// Description:
//   Which does hubot like best? Find out.
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot which do you prefer: <thing> or <thing> [.. or <thing>]?
//
// Author:
//   ajacksified

// Generated by CoffeeScript 1.6.3
(function() {
  module.exports = function(robot) {
    return robot.respond(/(which )?do you (like|like best|prefer)[:,\s]? (.*)$/i, function(msg) {
      var split, thing;
      split = msg.match[3].split(" or ");
      thing = split[(Math.random() * split.length) >> 0];
      if (thing[thing.length - 1] === '?') {
        thing = thing.slice(0, +(thing.length - 2) + 1 || 9e9);
      }
      return msg.send("I " + msg.match[2] + " " + thing + ".");
    });
  };

}).call(this);