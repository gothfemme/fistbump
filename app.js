var words = [
  "abba",
  "abet",
  "able",
  "ably",
  "aced",
  "aces",
  "ache",
  "achy",
  "acid",
  "acme",
  "acne",
  "acre",
  "acts",
  "adds",
  "aeon",
  "aero",
  "afar",
  "ages",
  "ahem",
  "ahoy",
  "aide",
  "aids",
  "ails",
  "aims",
  "airs",
  "airy",
  "ajar",
  "akin",
  "alan",
  "alas",
  "ales",
  "alky",
  "aloe",
  "alps",
  "also",
  "alto",
  "amen",
  "amid",
  "ammo",
  "amok",
  "amps",
  "anal",
  "anew",
  "ankh",
  "anna",
  "anon",
  "ante",
  "anti",
  "ants",
  "anus",
  "aped",
  "apes",
  "apex",
  "aqua",
  "arch",
  "area",
  "ares",
  "aria",
  "arms",
  "army",
  "arse",
  "arts",
  "arty",
  "asks",
  "atom",
  "atop",
  "aunt",
  "aura",
  "auto",
  "avid",
  "avow",
  "away",
  "awed",
  "awes",
  "awol",
  "awry",
  "axed",
  "axel",
  "axes",
  "axis",
  "axle",
  "babe",
  "baby",
  "bach",
  "back",
  "bade",
  "bags",
  "bail",
  "bait",
  "bake",
  "bald",
  "bale",
  "balk",
  "ball",
  "balm",
  "band",
  "bane",
  "bang",
  "bank",
  "bans",
  "baps",
  "barb",
  "bard",
  "bare",
  "barf",
  "bark",
  "barn",
  "bars",
  "base",
  "bash",
  "bask",
  "bass",
  "bate",
  "bath",
  "bats",
  "batt",
  "baud",
  "bawd",
  "bawl",
  "bays",
  "bead",
  "beak",
  "beam",
  "bean",
  "bear",
  "beat",
  "beds",
  "beef",
  "been",
  "beep",
  "beer",
  "bees",
  "beet",
  "begs",
  "bell",
  "belt",
  "bend",
  "bent",
  "best",
  "beta",
  "beth",
  "bets",
  "bias",
  "bide",
  "bids",
  "bier",
  "biff",
  "bigs",
  "bike",
  "bile",
  "bill",
  "bind",
  "bins",
  "bint",
  "bios",
  "bird",
  "bite",
  "bits",
  "bize",
  "blab",
  "blah",
  "blam",
  "blew",
  "blip",
  "blob",
  "bloc",
  "blot",
  "blow",
  "blub",
  "blue",
  "blur",
  "boar",
  "boat",
  "bobs",
  "bode",
  "body",
  "bogs",
  "boil",
  "bola",
  "bold",
  "bolt",
  "bomb",
  "bond",
  "bone",
  "bong",
  "bonk",
  "bony",
  "boob",
  "book",
  "boom",
  "boon",
  "bops",
  "bore",
  "born",
  "boss",
  "both",
  "bots",
  "bout",
  "bowl",
  "bows",
  "boxy",
  "boyo",
  "boys",
  "bozo",
  "brag",
  "bran",
  "bras",
  "brat",
  "bray",
  "bred",
  "bree",
  "brew",
  "brie",
  "brig",
  "brim",
  "brit",
  "bros",
  "brow",
  "bubs",
  "buck",
  "buds",
  "buff",
  "bugs",
  "bulb",
  "bulk",
  "bull",
  "bumf",
  "bump",
  "bums",
  "bung",
  "bunk",
  "buns",
  "buoy",
  "burn",
  "burp",
  "bury",
  "bush",
  "busk",
  "bust",
  "busy",
  "buts",
  "butt",
  "buys",
  "buzz",
  "byes",
  "byte",
  "cabs",
  "cafe",
  "cage",
  "cagy",
  "cake",
  "calf",
  "call",
  "calm",
  "came",
  "camp",
  "cane",
  "cant",
  "cape",
  "caps",
  "carb",
  "card",
  "care",
  "carp",
  "cars",
  "cart",
  "case",
  "cash",
  "cask",
  "cast",
  "cats",
  "cave",
  "cell",
  "celt",
  "chap",
  "char",
  "chat",
  "chef",
  "chew",
  "chic",
  "chin",
  "chip",
  "chop",
  "chow",
  "chub",
  "chug",
  "chum",
  "ciao",
  "cite",
  "city",
  "clam",
  "clan",
  "clap",
  "claw",
  "clay",
  "clef",
  "clip",
  "clog",
  "clot",
  "club",
  "clue",
  "coal",
  "coat",
  "coax",
  "coca",
  "cock",
  "coco",
  "code",
  "cogs",
  "coil",
  "coin",
  "coke",
  "cola",
  "cold",
  "colt",
  "coma",
  "comb",
  "come",
  "cone",
  "cook",
  "cool",
  "coon",
  "coop",
  "cope",
  "cops",
  "copy",
  "cord",
  "cork",
  "corn",
  "cosh",
  "cost",
  "cots",
  "coup",
  "cowl",
  "cows",
  "cozy",
  "crab",
  "crag",
  "cram",
  "crap",
  "crew",
  "crib",
  "croc",
  "crop",
  "crow",
  "crud",
  "crux",
  "cube",
  "cubs",
  "cues",
  "cuff",
  "cull",
  "cult",
  "cunt",
  "cups",
  "curb",
  "curd",
  "cure",
  "curl",
  "curt",
  "cusp",
  "cuss",
  "cute",
  "cuts",
  "cyan",
  "cyst",
  "czar",
  "dabs",
  "dada",
  "dads",
  "daft",
  "dale",
  "dame",
  "damn",
  "damp",
  "dang",
  "dank",
  "dare",
  "dark",
  "darn",
  "dart",
  "dash",
  "data",
  "date",
  "dawn",
  "days",
  "daze",
  "dead",
  "deaf",
  "deal",
  "dear",
  "debt",
  "deck",
  "deed",
  "deep",
  "deer",
  "deft",
  "defy",
  "deli",
  "demo",
  "dent",
  "deny",
  "desk",
  "deva",
  "devs",
  "dial",
  "dibs",
  "dice",
  "dick",
  "died",
  "dies",
  "diet",
  "digs",
  "dike",
  "dime",
  "ding",
  "dire",
  "dirt",
  "disc",
  "dish",
  "disk",
  "diss",
  "diva",
  "dive",
  "dock",
  "docs",
  "dodo",
  "does",
  "dogs",
  "dojo",
  "doll",
  "dome",
  "done",
  "dong",
  "doom",
  "door",
  "dope",
  "dork",
  "dorm",
  "dose",
  "dots",
  "dove",
  "down",
  "doze",
  "dozy",
  "drab",
  "drag",
  "dram",
  "drat",
  "draw",
  "drip",
  "drop",
  "drug",
  "drum",
  "dual",
  "duck",
  "duct",
  "dude",
  "duds",
  "duel",
  "duet",
  "duke",
  "dull",
  "duly",
  "dumb",
  "dump",
  "dune",
  "dung",
  "dunk",
  "dupe",
  "dusk",
  "dust",
  "duty",
  "dyed",
  "dyke",
  "each",
  "earl",
  "earn",
  "ears",
  "ease",
  "east",
  "easy",
  "eats",
  "eave",
  "echo",
  "eddy",
  "edge",
  "edgy",
  "eels",
  "eggs",
  "eggy",
  "egos",
  "ekes",
  "elms",
  "else",
  "emit",
  "ends",
  "envy",
  "eons",
  "epic",
  "ergo",
  "etch",
  "euro",
  "even",
  "ever",
  "eves",
  "evil",
  "exam",
  "exit",
  "eyed",
  "eyes",
  "face",
  "fact",
  "fade",
  "fads",
  "fags",
  "fail",
  "fair",
  "fake",
  "fall",
  "fame",
  "fang",
  "fare",
  "farm",
  "fart",
  "fast",
  "fate",
  "fats",
  "faux",
  "fave",
  "fawn",
  "faze",
  "fear",
  "feat",
  "feck",
  "feed",
  "feel",
  "fees",
  "feet",
  "fell",
  "felt",
  "fend",
  "feud",
  "fibs",
  "figs",
  "fill",
  "film",
  "find",
  "fine",
  "firm",
  "firs",
  "fish",
  "fist",
  "fits",
  "five",
  "fizz",
  "flab",
  "flag",
  "flak",
  "flap",
  "flat",
  "flaw",
  "flea",
  "fled",
  "flee",
  "flew",
  "flex",
  "flip",
  "flop",
  "flow",
  "flux",
  "foal",
  "foam",
  "fobs",
  "foes",
  "fogs",
  "foil",
  "fold",
  "folk",
  "fond",
  "font",
  "food",
  "fool",
  "foot",
  "fork",
  "form",
  "foul",
  "four",
  "fowl",
  "foxy",
  "frag",
  "frat",
  "fray",
  "free",
  "fret",
  "frog",
  "from",
  "fuel",
  "full",
  "fume",
  "fund",
  "funk",
  "furs",
  "fury",
  "fuse",
  "fuzz",
  "gaff",
  "gags",
  "gain",
  "gait",
  "gala",
  "gale",
  "gall",
  "gals",
  "game",
  "gang",
  "gaol",
  "gape",
  "gaps",
  "gash",
  "gasp",
  "gate",
  "gave",
  "gawk",
  "gawp",
  "gays",
  "gaze",
  "gear",
  "geek",
  "gels",
  "gems",
  "gene",
  "germ",
  "gets",
  "gift",
  "gigs",
  "gild",
  "gill",
  "gilt",
  "gimp",
  "girl",
  "gist",
  "gits",
  "give",
  "glad",
  "glee",
  "glib",
  "glob",
  "glow",
  "glue",
  "glug",
  "glum",
  "glut",
  "gnat",
  "gnaw",
  "goal",
  "goat",
  "gobs",
  "gods",
  "goes",
  "gold",
  "golf",
  "gone",
  "gong",
  "good",
  "goof",
  "goon",
  "goop",
  "gore",
  "gory",
  "gosh",
  "gout",
  "gown",
  "grab",
  "gram",
  "gran",
  "gray",
  "grew",
  "grey",
  "grid",
  "grim",
  "grip",
  "grit",
  "grog",
  "grow",
  "grub",
  "guff",
  "gulf",
  "gull",
  "gulp",
  "gums",
  "gunk",
  "guns",
  "guru",
  "gush",
  "gust",
  "guts",
  "guys",
  "gyms",
  "gyro",
  "hack",
  "hags",
  "haha",
  "hail",
  "hair",
  "half",
  "hall",
  "halo",
  "halt",
  "hams",
  "hand",
  "hang",
  "hard",
  "hare",
  "hark",
  "harp",
  "hash",
  "hate",
  "hats",
  "haul",
  "have",
  "hawk",
  "hays",
  "haze",
  "hazy",
  "head",
  "heal",
  "heap",
  "hear",
  "heat",
  "heed",
  "heel",
  "heil",
  "heir",
  "held",
  "hell",
  "helm",
  "help",
  "hemp",
  "herb",
  "herd",
  "here",
  "hero",
  "hers",
  "hewn",
  "hide",
  "high",
  "hike",
  "hill",
  "hilt",
  "hips",
  "hire",
  "hiss",
  "hits",
  "hive",
  "hoar",
  "hoax",
  "hobo",
  "hobs",
  "hogs",
  "hold",
  "hole",
  "holy",
  "home",
  "homo",
  "hone",
  "honk",
  "hood",
  "hook",
  "hoop",
  "hope",
  "hops",
  "horn",
  "hose",
  "host",
  "hour",
  "hove",
  "howl",
  "hubs",
  "hues",
  "huff",
  "huge",
  "hugs",
  "hulk",
  "hull",
  "hump",
  "hung",
  "hunk",
  "huns",
  "hunt",
  "hurl",
  "hurt",
  "hush",
  "husk",
  "huts",
  "hymn",
  "hype",
  "hypo",
  "iced",
  "ices",
  "icon",
  "idea",
  "idle",
  "idly",
  "idol",
  "ills",
  "imps",
  "inch",
  "info",
  "inks",
  "inky",
  "inns",
  "into",
  "ions",
  "iota",
  "iris",
  "irks",
  "isle",
  "itch",
  "item",
  "jabs",
  "jack",
  "jade",
  "jail",
  "jake",
  "jams",
  "jane",
  "jape",
  "jars",
  "java",
  "jaws",
  "jays",
  "jazz",
  "jean",
  "jeep",
  "jeer",
  "jeez",
  "jerk",
  "jess",
  "jest",
  "jets",
  "jews",
  "jibe",
  "jigs",
  "jill",
  "jilt",
  "jinx",
  "jism",
  "jive",
  "jobs",
  "jock",
  "jogs",
  "john",
  "join",
  "joke",
  "joky",
  "jolt",
  "josh",
  "jots",
  "joys",
  "judo",
  "jugs",
  "juke",
  "jump",
  "junk",
  "jury",
  "just",
  "kale",
  "kana",
  "kane",
  "keel",
  "keen",
  "keep",
  "kegs",
  "kent",
  "kept",
  "kerb",
  "kern",
  "keys",
  "kick",
  "kids",
  "kill",
  "kiln",
  "kilt",
  "kind",
  "king",
  "kink",
  "kins",
  "kiss",
  "kite",
  "kiwi",
  "knee",
  "knew",
  "knit",
  "knob",
  "knot",
  "know",
  "labs",
  "lace",
  "lack",
  "lads",
  "lady",
  "laid",
  "lain",
  "lair",
  "lake",
  "lamb",
  "lame",
  "lamp",
  "land",
  "lane",
  "laps",
  "lard",
  "lark",
  "lash",
  "lass",
  "last",
  "late",
  "lava",
  "lawn",
  "lays",
  "laze",
  "lazy",
  "lead",
  "leaf",
  "leak",
  "lean",
  "leap",
  "leek",
  "leer",
  "left",
  "legs",
  "lend",
  "lens",
  "lent",
  "lept",
  "less",
  "lest",
  "lets",
  "lewd",
  "liar",
  "lice",
  "lich",
  "lick",
  "lido",
  "lids",
  "lied",
  "lier",
  "lies",
  "lieu",
  "life",
  "lift",
  "like",
  "limb",
  "lime",
  "limp",
  "line",
  "link",
  "lint",
  "lion",
  "lips",
  "lisp",
  "list",
  "lite",
  "lits",
  "live",
  "load",
  "loaf",
  "loam",
  "loan",
  "lobe",
  "lobs",
  "lock",
  "loft",
  "logo",
  "logs",
  "loin",
  "lone",
  "long",
  "look",
  "loom",
  "loop",
  "loot",
  "lord",
  "lore",
  "lose",
  "loss",
  "lost",
  "lots",
  "loud",
  "love",
  "lube",
  "luck",
  "luge",
  "lull",
  "lump",
  "luna",
  "lung",
  "lure",
  "lurk",
  "lush",
  "lust",
  "lute",
  "mace",
  "mach",
  "macs",
  "made",
  "mage",
  "maid",
  "mail",
  "maim",
  "main",
  "make",
  "male",
  "mall",
  "malt",
  "mama",
  "mana",
  "mane",
  "many",
  "maps",
  "mare",
  "mark",
  "mars",
  "mash",
  "mask",
  "mass",
  "mast",
  "mate",
  "math",
  "maul",
  "mayo",
  "maze",
  "mead",
  "meal",
  "mean",
  "meat",
  "meek",
  "meld",
  "melt",
  "memo",
  "mend",
  "menu",
  "meow",
  "mere",
  "mesh",
  "mess",
  "meta",
  "meth",
  "mews",
  "mice",
  "midi",
  "mike",
  "mild",
  "mile",
  "milk",
  "mill",
  "mime",
  "mind",
  "mine",
  "mini",
  "mink",
  "mint",
  "minx",
  "mire",
  "miss",
  "mist",
  "mite",
  "mitt",
  "moan",
  "moat",
  "mock",
  "mode",
  "mojo",
  "mold",
  "mole",
  "moms",
  "monk",
  "mono",
  "mood",
  "moon",
  "moot",
  "mope",
  "mops",
  "more",
  "moss",
  "most",
  "mote",
  "moth",
  "move",
  "mown",
  "mows",
  "much",
  "muck",
  "muds",
  "muff",
  "mugs",
  "mule",
  "mump",
  "mums",
  "muon",
  "muse",
  "mush",
  "musk",
  "must",
  "mutt",
  "myth",
  "naan",
  "nags",
  "nail",
  "name",
  "nana",
  "nans",
  "naps",
  "navy",
  "nazi",
  "near",
  "neat",
  "neck",
  "need",
  "neon",
  "nerd",
  "nest",
  "nets",
  "news",
  "newt",
  "next",
  "nice",
  "nick",
  "nigh",
  "nine",
  "nips",
  "nits",
  "nobs",
  "node",
  "nods",
  "noir",
  "none",
  "nook",
  "noon",
  "nope",
  "norm",
  "nose",
  "nosh",
  "nosy",
  "note",
  "noun",
  "nowt",
  "nude",
  "nuke",
  "null",
  "numb",
  "nuns",
  "nuts",
  "oafs",
  "oaks",
  "oars",
  "oath",
  "oats",
  "obey",
  "obit",
  "oboe",
  "odds",
  "odes",
  "odor",
  "ogre",
  "oils",
  "oily",
  "oink",
  "okay",
  "olds",
  "omen",
  "omit",
  "once",
  "ones",
  "only",
  "onto",
  "onus",
  "onyx",
  "oops",
  "ooze",
  "opal",
  "open",
  "opus",
  "oral",
  "orbs",
  "orcs",
  "ores",
  "orgy",
  "ouch",
  "ours",
  "oust",
  "outs",
  "oval",
  "oven",
  "over",
  "owed",
  "owes",
  "owls",
  "owns",
  "oxen",
  "pace",
  "pack",
  "pact",
  "pads",
  "page",
  "paid",
  "pail",
  "pain",
  "pair",
  "pale",
  "pall",
  "palm",
  "pals",
  "pane",
  "pang",
  "pant",
  "papa",
  "paps",
  "pare",
  "park",
  "part",
  "pass",
  "past",
  "path",
  "pave",
  "pawn",
  "paws",
  "pays",
  "peak",
  "pear",
  "peas",
  "peat",
  "peck",
  "peed",
  "peek",
  "peel",
  "peep",
  "peer",
  "pees",
  "pegs",
  "pelt",
  "pend",
  "pens",
  "pent",
  "peon",
  "perk",
  "perm",
  "pert",
  "pest",
  "pets",
  "pews",
  "phat",
  "phew",
  "pick",
  "pier",
  "pies",
  "pigs",
  "pile",
  "pill",
  "pimp",
  "pine",
  "ping",
  "pink",
  "pins",
  "pint",
  "pipe",
  "pips",
  "piss",
  "pita",
  "pits",
  "pity",
  "pixy",
  "plan",
  "play",
  "plea",
  "pleb",
  "plod",
  "plop",
  "plot",
  "plow",
  "ploy",
  "plug",
  "plum",
  "plus",
  "pods",
  "poem",
  "poet",
  "poke",
  "pole",
  "poll",
  "polo",
  "poly",
  "pomp",
  "pond",
  "pong",
  "pony",
  "poof",
  "pooh",
  "pool",
  "poon",
  "poop",
  "poor",
  "pope",
  "pops",
  "pore",
  "pork",
  "port",
  "pose",
  "posh",
  "post",
  "pour",
  "pout",
  "pram",
  "prat",
  "pray",
  "prep",
  "prey",
  "prim",
  "prod",
  "prom",
  "prop",
  "prow",
  "psst",
  "pubs",
  "puce",
  "puck",
  "puds",
  "puff",
  "pugs",
  "puke",
  "pull",
  "pulp",
  "puma",
  "pump",
  "punk",
  "puns",
  "punt",
  "puny",
  "pups",
  "pure",
  "purr",
  "push",
  "puss",
  "puts",
  "putt",
  "quad",
  "quay",
  "quid",
  "quip",
  "quit",
  "quiz",
  "race",
  "rack",
  "racy",
  "raft",
  "rage",
  "rags",
  "raid",
  "rail",
  "rain",
  "rake",
  "rale",
  "ramp",
  "rams",
  "rang",
  "rank",
  "rant",
  "rape",
  "raps",
  "rapt",
  "rare",
  "rash",
  "rasp",
  "rate",
  "rats",
  "rave",
  "rays",
  "raze",
  "read",
  "real",
  "ream",
  "reap",
  "rear",
  "redo",
  "reed",
  "reef",
  "reek",
  "reel",
  "rely",
  "rent",
  "repo",
  "reps",
  "rest",
  "revs",
  "ribs",
  "rice",
  "rich",
  "rick",
  "ride",
  "rife",
  "riff",
  "rift",
  "rigs",
  "rile",
  "rims",
  "rind",
  "ring",
  "rink",
  "riot",
  "ripe",
  "rips",
  "rise",
  "risk",
  "rite",
  "ritz",
  "road",
  "roam",
  "roar",
  "robe",
  "robs",
  "rock",
  "rode",
  "rods",
  "role",
  "rolf",
  "roll",
  "romp",
  "roof",
  "room",
  "root",
  "rope",
  "rose",
  "rosy",
  "rota",
  "rote",
  "rows",
  "rubs",
  "ruby",
  "rude",
  "rugs",
  "ruin",
  "rule",
  "ruly",
  "rump",
  "rums",
  "rune",
  "rung",
  "runs",
  "runt",
  "ruse",
  "rush",
  "rusk",
  "rust",
  "ruth",
  "ruts",
  "sack",
  "safe",
  "saga",
  "sage",
  "said",
  "sail",
  "sake",
  "sale",
  "salt",
  "same",
  "sand",
  "sane",
  "sang",
  "sank",
  "saps",
  "sash",
  "sass",
  "save",
  "sawn",
  "scab",
  "scam",
  "scan",
  "scar",
  "scat",
  "scot",
  "scum",
  "seal",
  "seam",
  "sear",
  "seas",
  "seat",
  "sect",
  "seed",
  "seek",
  "seem",
  "seen",
  "sees",
  "self",
  "sell",
  "send",
  "sent",
  "sets",
  "sewn",
  "sews",
  "sext",
  "sexy",
  "shag",
  "sham",
  "shat",
  "shed",
  "shes",
  "shin",
  "ship",
  "shit",
  "shoe",
  "shop",
  "shot",
  "show",
  "shun",
  "shut",
  "sick",
  "side",
  "sift",
  "sigh",
  "sign",
  "silk",
  "sill",
  "silo",
  "silt",
  "sims",
  "sine",
  "sing",
  "sink",
  "sins",
  "sips",
  "sire",
  "sirs",
  "site",
  "sith",
  "sits",
  "size",
  "skew",
  "skid",
  "skim",
  "skin",
  "skip",
  "skis",
  "slab",
  "slag",
  "slam",
  "slap",
  "slay",
  "sled",
  "slew",
  "slid",
  "slim",
  "slip",
  "slit",
  "slob",
  "slog",
  "slop",
  "slot",
  "slow",
  "slug",
  "slum",
  "slur",
  "slut",
  "smog",
  "smug",
  "smut",
  "snag",
  "snap",
  "snip",
  "snob",
  "snog",
  "snot",
  "snow",
  "snub",
  "snug",
  "soak",
  "soap",
  "soar",
  "sobs",
  "sock",
  "soda",
  "sods",
  "sofa",
  "soft",
  "soil",
  "sold",
  "sole",
  "solo",
  "soma",
  "some",
  "song",
  "sons",
  "soon",
  "soot",
  "sore",
  "sort",
  "soul",
  "soup",
  "sour",
  "sown",
  "sows",
  "soya",
  "span",
  "spar",
  "spat",
  "spaz",
  "spec",
  "sped",
  "spew",
  "spin",
  "spit",
  "spot",
  "spry",
  "spud",
  "spun",
  "spur",
  "stab",
  "stag",
  "star",
  "stat",
  "stay",
  "stem",
  "step",
  "stew",
  "stir",
  "stop",
  "stun",
  "subs",
  "such",
  "suck",
  "sued",
  "sues",
  "suet",
  "suit",
  "sulk",
  "sumo",
  "sums",
  "sung",
  "sunk",
  "suns",
  "sure",
  "surf",
  "suss",
  "swag",
  "swam",
  "swan",
  "swap",
  "swat",
  "sway",
  "swig",
  "swim",
  "swop",
  "swot",
  "swum",
  "sync",
  "tabs",
  "tack",
  "taco",
  "tact",
  "tags",
  "tail",
  "take",
  "talc",
  "tale",
  "talk",
  "tall",
  "tame",
  "tang",
  "tank",
  "tans",
  "tape",
  "taps",
  "tart",
  "task",
  "taut",
  "taxi",
  "teak",
  "teal",
  "team",
  "tear",
  "teas",
  "teat",
  "teen",
  "tees",
  "tell",
  "temp",
  "tend",
  "tent",
  "term",
  "test",
  "text",
  "than",
  "that",
  "thaw",
  "thee",
  "them",
  "then",
  "they",
  "thin",
  "this",
  "thru",
  "thud",
  "thug",
  "tick",
  "tide",
  "tidy",
  "tied",
  "tier",
  "ties",
  "tile",
  "till",
  "tilt",
  "time",
  "tins",
  "tint",
  "tiny",
  "tips",
  "tire",
  "tits",
  "toad",
  "toby",
  "toes",
  "toff",
  "tofu",
  "toil",
  "toke",
  "told",
  "toll",
  "tomb",
  "tome",
  "tone",
  "tony",
  "took",
  "tool",
  "toon",
  "toot",
  "tops",
  "tore",
  "torn",
  "tosh",
  "toss",
  "tots",
  "tour",
  "tout",
  "town",
  "tows",
  "toys",
  "tram",
  "trap",
  "tree",
  "trek",
  "trim",
  "trio",
  "trip",
  "trod",
  "trop",
  "trot",
  "trow",
  "true",
  "tsar",
  "tuba",
  "tube",
  "tubs",
  "tuck",
  "tuft",
  "tugs",
  "tuna",
  "tune",
  "turd",
  "turf",
  "turk",
  "turn",
  "tush",
  "tusk",
  "tutu",
  "twas",
  "twat",
  "twee",
  "twin",
  "twit",
  "tyke",
  "type",
  "typo",
  "tyre",
  "tzar",
  "ugly",
  "undo",
  "unit",
  "unto",
  "upon",
  "urea",
  "urge",
  "urns",
  "used",
  "user",
  "uses",
  "vain",
  "vale",
  "vamp",
  "vane",
  "vans",
  "vary",
  "vase",
  "vast",
  "vats",
  "veal",
  "veer",
  "veil",
  "vein",
  "vend",
  "vent",
  "verb",
  "very",
  "vest",
  "veto",
  "vets",
  "vial",
  "vibe",
  "vice",
  "view",
  "vine",
  "viva",
  "void",
  "volt",
  "vote",
  "vows",
  "wack",
  "wade",
  "wads",
  "waft",
  "wage",
  "wags",
  "waif",
  "wait",
  "wake",
  "walk",
  "wall",
  "wand",
  "wane",
  "want",
  "ward",
  "ware",
  "warm",
  "warn",
  "warp",
  "wars",
  "wart",
  "wary",
  "wash",
  "wasp",
  "watt",
  "wave",
  "wavy",
  "waxy",
  "ways",
  "weak",
  "weal",
  "wean",
  "wear",
  "weed",
  "week",
  "weir",
  "weld",
  "well",
  "welt",
  "wend",
  "went",
  "wept",
  "were",
  "west",
  "wham",
  "what",
  "when",
  "whew",
  "whey",
  "whim",
  "whip",
  "whit",
  "whiz",
  "whoa",
  "whom",
  "wick",
  "wide",
  "wife",
  "wigs",
  "wild",
  "will",
  "wilt",
  "wimp",
  "wind",
  "wine",
  "wing",
  "wink",
  "wino",
  "wins",
  "wipe",
  "wire",
  "wiry",
  "wise",
  "wish",
  "wisp",
  "with",
  "wits",
  "wive",
  "woes",
  "woke",
  "woks",
  "wolf",
  "womb",
  "wood",
  "woof",
  "wool",
  "word",
  "wore",
  "work",
  "worm",
  "worn",
  "wows",
  "wrap",
  "wren",
  "writ",
  "wuss",
  "yaks",
  "yams",
  "yank",
  "yaps",
  "yard",
  "yarn",
  "yawn",
  "yeah",
  "year",
  "yell",
  "yelp",
  "yeti",
  "yobs",
  "yoga",
  "yoke",
  "yolk",
  "your",
  "yuck",
  "yule",
  "zany",
  "zaps",
  "zeal",
  "zero",
  "zest",
  "zinc",
  "zing",
  "zips",
  "zits",
  "zone",
  "zoom",
  "zoos"
];

var tattoo = {
  left: 'fist',
  right: 'bump'
};

function stringify(tattoo) {
  return tattoo.left + tattoo.right;
}

function urlify(tattoo) {
  var urlfragments = location.pathname.split('/');
  urlfragments.pop();
  urlfragments.push(stringify(tattoo));
  return urlfragments.join('/');
}

function drawLetter(side, word) {
  word.split('').map(function(letter, index) {
    document.getElementById(side + (index + 1)).innerHTML = letter;
  });
}

function draw(fromHistory) {
  Object.keys(tattoo).map(function(key) { drawLetter(key, tattoo[key]) });
  var tattooString = stringify(tattoo);
  var tattooUrl = urlify(tattoo);
  document.getElementById("permalink").href = tattooUrl;
  if(typeof fromHistory === 'undefined' || !fromHistory) {
    history.pushState(tattoo, "#fistbump: " + tattooString, tattooUrl);
  }
}

function initialize() {
  var page = decodeURIComponent(location.pathname.split('/')[location.pathname.split('/').length - 1]);
  if(page.length === 8) {
    tattoo.left = page.substring(0,4);
    tattoo.right = page.substring(4);
  } else if(page.length === 9 && page[4] === "+") {
    tattoo.left = page.substring(0,4);
    tattoo.right = page.substring(5);
  } else {
    randomize();
  }
  draw();
}

function randomize() {
  tattoo.left = words[Math.floor((Math.random() * words.length))];
  tattoo.right = words[Math.floor((Math.random() * words.length))];
}

window.onload = initialize;

window.addEventListener('popstate', function(event) {
  tattoo = event.state;
  draw(true);
});