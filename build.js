const {exec} = require('child_process')
const fs = require('fs')

const path = process.argv[1]
const directory = __dirname.replace(/.*hr-mkt_sankou_page_/, '')
const env = process.argv[2]
let command = 'pwd'

console.log('env', env)
console.log('directory', directory)

if(env === 'prod'){
    command = `NODE_ENV=production next build && next export -o ../hr-mkt_sankou_index/public/pages/${directory}`
}else{
    command = `NODE_ENV=development next build && next export`
}

exec(command, (err, stdout, stderr) => {
    if(err){ concole.error(err)}
    console.log(stdout)
    console.log('finished.')
})
