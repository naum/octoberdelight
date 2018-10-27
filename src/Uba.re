
[@bs.deriving abstract]
type athlete = {
    name: string,
    skill: array(int)
};

[@bs.deriving abstract]
type club = {
    city: string,
    roster: array(athlete)
};

[@bs.deriving abstract]
type league = {
    title: string,
    mutable seasonNum: int,
    clubs: array(club),
    mutable freeagents: array(athlete)
}