#!/usr/bin/env node
 const chalk  = require('chalk')

const log = console.log
const argv = process.argv.slice(2)

if(argv.length === 0){
  console.log('请指定你想要使用的包管理器，npm-client-limit <npm|pnpm|yarn>')
  process.exit(1)
}
const wantedNpmClient = argv[0]
const useWantedNpmClient = (wantedNpmClient) => {
  return (
   (process.env.npm_execpath && process.env.npm_execpath.includes(wantedNpmClient)) ||
   (process.env.npm_config_user_agent &&
    process.env.npm_config_user_agent.includes(wantedNpmClient))
  )
 }

if(!useWantedNpmClient(wantedNpmClient)){
  log(chalk.red('此项目只能使用 ' + wantedNpmClient + " 包管理器," + '安装依赖请执行 ' + wantedNpmClient + ' install'))
  process.exit(1)
 }
 
