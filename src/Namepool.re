Random.self_init();

let dictfile = "/usr/share/dict/words";
let maxWordSize = 6;

let wordpool = Node.Fs.readFileAsUtf8Sync(dictfile)
    |> String.trim
    |> Js.String.split("\n")
    |> Js.Array.filter(w => String.length(w) <= maxWordSize)
    |> Js.Array.map(w => Js.String.toUpperCase(w));
let wordpoolLen = Js.Array.length(wordpool);

let draw = () => {
    let x1 = Random.int(wordpoolLen);
    let x2 = Random.int(wordpoolLen);
    wordpool[x1] ++ wordpool[x2];
};