
let uba = Uba.genesis();
/* Js.log(uba); */

Uba.store(uba);
let uba2 = Uba.load();
Js.log(uba2);