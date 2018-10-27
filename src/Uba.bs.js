// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var Random = require("bs-platform/lib/js/random.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Namepool$Octoberdelight = require("./Namepool.bs.js");

Random.self_init(/* () */0);

var posMatrix = "PPPPCIIIIOOO";

var citypool = /* array */[
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

function randAge() {
  return Caml_int32.imul(randSkill(/* () */0), 6) + Random.$$int(6) | 0;
}

function randSkillSet() {
  return /* array */[
          randSkill(/* () */0),
          randSkill(/* () */0),
          randSkill(/* () */0),
          randSkill(/* () */0),
          randSkill(/* () */0),
          randSkill(/* () */0)
        ];
}

function spawnAthlete(p) {
  return {
          name: Namepool$Octoberdelight.draw(/* () */0),
          age: randAge(/* () */0),
          pos: p,
          skill: randSkillSet(/* () */0)
        };
}

function spawnAthleteGroup(posToFill) {
  return posToFill.split("").map(spawnAthlete);
}

function genesis() {
  var pm = posMatrix.repeat(32);
  return {
          title: "UBA",
          seasonNum: 0,
          clubs: /* array */[],
          freeagents: spawnAthleteGroup(pm)
        };
}

var totalTeams = 32;

exports.posMatrix = posMatrix;
exports.totalTeams = totalTeams;
exports.citypool = citypool;
exports.randSkill = randSkill;
exports.randAge = randAge;
exports.randSkillSet = randSkillSet;
exports.spawnAthlete = spawnAthlete;
exports.spawnAthleteGroup = spawnAthleteGroup;
exports.genesis = genesis;
/*  Not a pure module */
