// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Random = require("bs-platform/lib/js/random.js");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");

Random.self_init(/* () */0);

var cityPool = /* array */[
  "New York",
  "Los Angeles",
  "Chicago",
  "Dallas",
  "Houston",
  "Washington",
  "Miami",
  "Philadelphia",
  "Atlanta",
  "Boston",
  "Phoenix",
  "San Francisco",
  "Riverside",
  "Detroit",
  "Seattle",
  "Minneapolis",
  "San Diego",
  "Tampa",
  "Denver",
  "Baltimore",
  "St. Louis",
  "Charlotte",
  "Orlando",
  "San Antonio",
  "Portland",
  "Pittsburgh",
  "Sacramento",
  "Las Vegas",
  "Cincinnati",
  "Kansas City",
  "Austin",
  "Columbus"
];

function randSkill() {
  var x = Random.$$int(432);
  if (x < 125) {
    return 0;
  } else if (x < 325) {
    return 1;
  } else if (x < 415) {
    return 2;
  } else if (x < 431) {
    return 3;
  } else {
    return 4;
  }
}

var class_tables = [
  0,
  0,
  0
];

function genesis() {
  if (!class_tables[0]) {
    var $$class = CamlinternalOO.create_table(0);
    var env = CamlinternalOO.new_variable($$class, "");
    var env_init = function (env$1) {
      var self = CamlinternalOO.create_object_opt(0, $$class);
      self[env] = env$1;
      return self;
    };
    CamlinternalOO.init_class($$class);
    class_tables[0] = env_init;
  }
  return Curry._1(class_tables[0], 0);
}

var totalTeams = 8;

exports.totalTeams = totalTeams;
exports.cityPool = cityPool;
exports.randSkill = randSkill;
exports.genesis = genesis;
/*  Not a pure module */
