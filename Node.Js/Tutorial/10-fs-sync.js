const fs = require('fs')
console.log("start")
const first = fs.readFileSync('./content/first.txt', 'utf8')
const second = fs.readFileSync('./content/second.txt', 'utf8')

fs.writeFileSync('./content/result-syn.txt', 
    `Here is the result : ${first}. ${second}`,
    {flag: 'a'}
)
console.log("done")
// filepath: c:\Users\yuvra\Desktop\Repos\Dev-learning-journey\Node.Js\Tutorial\10-fs-sync.js