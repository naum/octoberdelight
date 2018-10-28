
let homedir = Sys.getenv("HOME");
let savepath = homedir ++ "/.uba.json";

let ncpo = Node.Child_process.option(~encoding="Utf8", ());
let lsout = Node.Child_process.execSync("uptime", ncpo);
