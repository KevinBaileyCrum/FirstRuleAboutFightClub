const candidates = [
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

// Durstenfeld shuffle
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffleFighters = (fighters) => {
   for (let i = fighters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [fighters[i], fighters[j]] = [fighters[j], fighters[i]];
   }
   return fighters
}

const slap = (hitter, receiver) => {
   receiver[1] -= hitter[2]
}

const fight = (fighters) => {
   // randomize order for who strikes first
   shuffleFighters(fighters)
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
   let winnerMap = new Map()
   candidates.forEach(contestant => {
      const opponents = candidates.filter(opponent => candidates.indexOf(opponent) > candidates.indexOf(contestant))
      if (opponents.length > 0) {
         opponents.forEach(opponent => {
            winner = fight([contestant.slice(0), opponent.slice(0)])
            if (winnerMap.has(winner[0])){
               winnerMap.get(winner[0]).wins++
            } else {
               winnerMap.set(winner[0], {wins: 1})
            }
         })
      }
   })
   mapAsArray = Array.from(winnerMap)
   sortedWinners = mapAsArray.sort((a, b) => {
      return b[1].wins - a[1].wins
   })
   console.log(sortedWinners)
}

// if __name__ == '__main__'
if (require.main === module) {
   main()
}
