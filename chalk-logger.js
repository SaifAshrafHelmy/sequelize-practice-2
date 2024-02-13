const chalk = require('chalk');
const { argv } = require('process');

const logger = {
  info: (...args) => {
    const text = args.join(', ');

    console.log(
      `${new Date().toLocaleTimeString()}`,
      chalk.bold.green('(INFO)    : ', text)
    );
  },
  data: (...args) => {
    const text = args.join(', ');

    console.log(
      `${new Date().toLocaleTimeString()}`,
      chalk.bold.blue('(DATA)    : '),
      chalk.bold.bgWhite.blue(text)
    );
  },
  warn: (...args) => {
    const text = args.join(', ');

    console.log(
      `${new Date().toLocaleTimeString()}`,
      chalk.hex('#FFA500')('(WARNING) : ', text)
    );
  },
  error: (...args) => {
    const text = args.join(', ');
    let errorStack = '';
    for (let i in args) {
      if (
        typeof args[i] === 'object' &&
        Object.getOwnPropertyNames(args[i]).includes('stack')
      ) {
        errorStack = args[i].stack;
      }
    }

    console.log(
      `${new Date().toLocaleTimeString()}`,
      chalk.bold.red('(ERROR)   : ', text)
    );
    console.log(chalk.bold.bgWhite.red(errorStack));
  },
};

module.exports = logger;
