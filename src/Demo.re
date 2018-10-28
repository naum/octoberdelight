

let uba = Uba.genesis();
Js.log(uba); 

Uba.store(uba, Config.savepath);
let uba2 = Uba.load(Config.savepath);
Js.log(uba2); 

Js.log(Config.lsout);