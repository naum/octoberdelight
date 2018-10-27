Random.self_init();

let totalTeams = 8;
let cityPool = [|
    "New York", "Los Angeles", "Chicago", "Dallas",
    "Houston", "Washington", "Miami", "Philadelphia",
    "Atlanta", "Boston", "Phoenix", "San Francisco",
    "Riverside", "Detroit", "Seattle", "Minneapolis",
    "San Diego", "Tampa", "Denver", "Baltimore",
    "St. Louis", "Charlotte", "Orlando", "San Antonio",
    "Portland", "Pittsburgh", "Sacramento", "Las Vegas",
    "Cincinnati", "Kansas City", "Austin", "Columbus"
|];

[@bs.deriving abstract]
type athlete = {
    name: string,
    skill: array(int),
};

[@bs.deriving abstract]
type club = {
    city: string,
    mutable roster: array(athlete),
};

[@bs.deriving abstract]
type league = {
    title: string,
    mutable seasonNum: int,
    clubs: array(club),
    mutable freeagents: array(athlete),
};

let randSkill = () => {
    let x = Random.int(432);
    switch (x) {
        | _ when x < 125 => 0
        | _ when x < 325 => 1
        | _ when x < 415 => 2
        | _ when x < 431 => 3
        | _ => 4
    };
};

let genesis = () => {};