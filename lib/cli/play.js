'use strict'

const chalk = require('chalk')

module.exports = play

function play(file, options) {
  if (!file) {
    console.log(chalk.yellow('[PM0] >> file not set'))
  }
  console.log(process.cwd())
  // if file is script (.js / 755)
  // use or find pm0.json
  // load config
  // create process and link stdin-out
  //
  //   // use or find pm0.json
    // load config
    // create & manage process
    // link stdout-err to log file

}
