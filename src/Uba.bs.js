// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Curry = require("bs-platform/lib/js/curry.js");
var Random = require("bs-platform/lib/js/random.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Namepool$Octoberdelight = require("./Namepool.bs.js");

Random.self_init(/* () */0);

var posMatrix = "PPPPCIIIIOOO";

var skillMatrix = /* array */[
  "W",
  "K",
  "P",
  "G"
];

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
  return Js_dict.fromArray(skillMatrix.map((function (sk) {
                    return /* tuple */[
                            sk,
                            randSkill(/* () */0)
                          ];
                  })));
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

function spawnClub(c) {
  return {
          city: c,
          roster: /* array */[]
        };
}

function spawnClubs() {
  return (function (param) {
                return Belt_Array.slice(param, 0, 8);
              })(Belt_Array.shuffle(citypool)).map((function (c) {
                return {
                        city: c,
                        roster: /* array */[]
                      };
              }));
}

var serialize = (
    function (o) { return JSON.stringify(o); }
);

var unserialize = (
    function (s) { return JSON.parse(s); }
);

function load(fp) {
  return Curry._1(unserialize, Fs.readFileSync(fp, "utf8"));
}

function store(l, fp) {
  var ostr = Curry._1(serialize, l);
  Fs.writeFileSync(fp, ostr, "utf8");
  return /* () */0;
}

function genesis() {
  var pm = posMatrix.repeat(8);
  return {
          title: "UBA",
          seasonNum: 0,
          clubs: spawnClubs(/* () */0),
          freeagents: spawnAthleteGroup(pm)
        };
}

var totalTeams = 8;

exports.posMatrix = posMatrix;
exports.skillMatrix = skillMatrix;
exports.totalTeams = totalTeams;
exports.citypool = citypool;
exports.randSkill = randSkill;
exports.randAge = randAge;
exports.randSkillSet = randSkillSet;
exports.spawnAthlete = spawnAthlete;
exports.spawnAthleteGroup = spawnAthleteGroup;
exports.spawnClub = spawnClub;
exports.spawnClubs = spawnClubs;
exports.serialize = serialize;
exports.unserialize = unserialize;
exports.load = load;
exports.store = store;
exports.genesis = genesis;
/*  Not a pure module */
