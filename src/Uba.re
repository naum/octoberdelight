Random.self_init();

let posMatrix = "PPPPCIIIIOOO";
let skillMatrix = [| "W", "K", "P", "R", "G" |];
let totalTeams = 8;
let citypool = [|
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
    mutable age: int,
    pos: string,
    skill: Js.Dict.t(int),
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

let randAge = () =>
    (randSkill() * 6) + Random.int(6);

let randSkillSet = () => 
    skillMatrix
        |> Js.Array.map(sk => (sk, randSkill()))
        |> Js.Dict.fromArray;

let spawnAthlete = (p) => {
    athlete(
        ~name=Namepool.draw(), ~age=randAge(), 
        ~pos=p, ~skill=randSkillSet()
    );
};

let spawnAthleteGroup = (posToFill) => {
    Js.String.split("", posToFill)
        |> Js.Array.map(p => spawnAthlete(p));
}

let spawnClub = (c) =>
    club(~city=c, ~roster=[| |]);

let spawnClubs = () => {
    Belt.Array.shuffle(citypool)
        |> Belt.Array.slice(~offset=0, ~len=8)
        |> Js.Array.map(c => spawnClub(c))
};

let serialize: (league) => string = [%bs.raw {|
    function (o) { return JSON.stringify(o); }
|}];

let unserialize: (string) => league = [%bs.raw {|
    function (s) { return JSON.parse(s); }
|}]

let load = () => {
    let ostr = Node.Fs.readFileAsUtf8Sync("uba.json");
    unserialize(ostr);
};

let store = (l) => {
    let ostr = serialize(l);
    Node.Fs.writeFileAsUtf8Sync("uba.json", ostr);
}

let genesis = () => {
    let pm = Js.String.repeat(totalTeams, posMatrix);
    league(
        ~title="UBA", ~clubs=spawnClubs(), 
        ~seasonNum=0, ~freeagents=spawnAthleteGroup(pm)
    );
}