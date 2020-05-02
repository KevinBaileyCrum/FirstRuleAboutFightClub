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


   }
}

   // main
   const main = () => {
      const candidates = parseArgs(process.argv.slice(2))
      console.log(candidates)
   }

   // if __name__ == '__main__'
   if (require.main === module) {
      main()
   }
