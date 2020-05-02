const defaultCandidates = [
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
]

const parseArgs = (args) => {
   if (args.length == 0) {
      return defaultCandidates
   } else if (args.length == 1) {
      const fs = require('fs')
      const filename = args[0]
      const candidates = fs.readFileSync(args[0], {encoding:'utf8', flag:'r'})
      return candidates


   } else {
      console.log('usage: node fight.js [filename]\nfile name is optional')
      process.exit()
   }
}

// Durstenfeld shuffle
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffleCandidates = (candidates) => {
   for (let i = candidates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
   }
   return candidates
}

const slap = (hitter, receiver) => {
   // console.log(`${hitter} slapping ${receiver}`)
   receiver[1] -= hitter[2]
}

const fight = (fighters) => {
   // randomize order for who strikes first
   shuffleCandidates(fighters)
   // console.log('fighters')
   // console.log(fighters)
   let turn = 0
   while ((fighters[0][1] > 0) && (fighters[1][1] > 0)) {
      slap(fighters[turn % 2], fighters[(turn + 1) % 2])
      turn += 1
   }
   if (fighters[0][1] > fighters[1][1]) {
      return fighters[0]
   } else {
      return fighters[1]
   }
}

// main
const main = () => {
   previousMatches = new Map()
   let candidates = parseArgs(process.argv.slice(2))
   // console.log(candidates)
   // candidates= [  [ 'Harry Potter', 96, 16 ], [ 'Shamu', 280, 24 ]]
   candidates.forEach(contestant => {
      // console.log(contestant)
      const opponents = candidates.filter(opponent => candidates.indexOf(opponent) > candidates.indexOf(contestant))
      console.log('contestant')
      console.log(contestant)
      console.log('opponents')
      console.log(opponents)
      opponents.forEach(opponent => {
         // check for duplicate match
         // if (previousMatches.get(opponent) {
            // return
         // }
         // else {
         winner = fight([contestant.slice(0), opponent.slice(0)])
         // console.log('win')
         // console.log(winner)
         // console.log('all')
         // console.log(candidates)
      })
   })
}

// if __name__ == '__main__'
if (require.main === module) {
   main()
}
