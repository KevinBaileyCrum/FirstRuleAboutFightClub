# FirstRuleAboutFightClub
Don't Talk About Robin 


## Initial Assumptions
* The matches are set up such that for all applicants, each one gets to fight each other -- ie not a tournament style bracket where only winners move on to fight winners
* the default candidate field is identical with the one provided with the exception that  the first element `["name", "Health", "Damage"]` is removed

## Usage
* `git clone https://github.com/KevinBaileyCrum/FirstRuleAboutFightClub/`
* `cd FirstRuleAboutFightClub`
* `node fight.js [filename]`
* `[filename]` is an optional argument if you would like to include a different set of candidates.  Otherwise the default candidates:
```
const candidates = [
["Name","Health","Damage"],
["Tom Cruise",136,6],
["Sponge Bob",110,4],
["James Earl Jones",175,8],
["Bob Barker",112,2],
["Tonya Harding",108,7],
["Charles Barkley",220,12],
["Peter Piper",116,4],
["Harry Potter",96,16],
["Shamu",280,24],
["Bill Gates",124,6],
];
```
