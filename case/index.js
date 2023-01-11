#! /usr/bin/env node
/*
  相关案例：
  具体参考：
    https://juejin.cn/post/6966119324478079007#heading-50
    https://juejin.cn/post/7178666619135066170
  注意
    inquirer、chalk、ora使用不是最新版本，为了兼容使用require
    上述三者最新版本是import语法，需要package.json的type:module，然后将require用以下代码替换：
    import { createRequire } from 'module';
    const require = createRequire(import.meta.url);
*/

const { program } = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');
const spawn = require('cross-spawn');
const figlet = require('figlet');

// 命令行

// 格式如下：<bin>指令 create <name></name>
program
.version('1.0.0')
.command('create <name>')
.description('create a new project')
.action(name => {
    // 打印命令行输入的值

    // 文本样式
    console.log("project name is " + chalk.bold(name))

    // 颜色
    console.log("project name is " + chalk.cyan(name))
    console.log("project name is " + chalk.green(name))

    // 背景色
    console.log("project name is " + chalk.bgRed(name))

    // 使用RGB颜色输出
    console.log("project name is " + chalk.rgb(4, 156, 219).underline(name));
    console.log("project name is " + chalk.hex('#049CDB').bold(name));
    console.log("project name is " + chalk.bgHex('#049CDB').bold(name))
})


// 打印LOGO

program
  .on('--help', () => {
    // 使用 figlet 绘制 Logo
    console.log('\r\n' + figlet.textSync('CliBasic', {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 80,
      whitespaceBreak: true
    }));
    // 新增说明信息
    console.log(`\r\nRun ${chalk.cyan(`roc <command> --help`)} show details\r\n`)
  })

program.parse()

// 交互命令

inquirer
  .prompt([
    {
      type: 'type',
      name: 'name',
      message: 'Your name',
      default: 'cli-basic',
    },
  ])
  .then(ans => {
    console.log(ans);
  });

// 动画加载

// 自定义文本信息
const message = 'Loading unicorns'
// 初始化
const spinner = ora(message);
// 开始加载动画
spinner.start();

setTimeout(() => {
    // 修改动画样式

    // Type: string
    // Default: 'cyan'
    // Values: 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray'
    spinner.color = 'red';
    spinner.text = 'Loading rainbows';

    setTimeout(() => {
        // 加载状态修改
        spinner.stop() // 停止
        spinner.succeed('Loading succeed'); // 成功 ✔
        // spinner.fail(text?);  失败 ✖
        // spinner.warn(text?);  提示 ⚠
        // spinner.info(text?);  信息 ℹ
    }, 2000);
}, 2000);


const dependencies = ['vue'];

const child = spawn('npm', ['install', '-D'].concat(dependencies), {
  stdio: 'inherit',
});

child.on('close', function (code) {
  if (code !== 0) {
    console.log(chalk.red('Error occured while installing dependencies'));
    process.exit(1);
  } else {
    console.log(chalk.cyan('Install finished!'));
  }
});
