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
    const error = args.find(
      (arg) => typeof arg === 'object' && arg instanceof Error
    );
    const errorStack = error ? error.stack : '';

    console.log(
      `${new Date().toLocaleTimeString()}`,
      chalk.bold.red('(ERROR)   : ', text)
    );
    console.log(chalk.bold.bgWhite.red(errorStack));
  },
  log: (...args) => {
    logger.info(...args);
  },
  debug: (...args) => {
    logger.data(...args);
  },
};

module.exports = logger;
