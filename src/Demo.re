let uba = Uba.genesis();
/* Js.log(uba); */

let fa = uba |> Uba.freeagentsGet;
Js.log(fa[0]);
let faname = fa[0] |> Uba.nameGet;
Js.log(faname);