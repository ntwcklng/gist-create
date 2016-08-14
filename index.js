const GithubClient = require('github');
const fs = require('fs');
const chalk = require('chalk');
const copyToClipboard = require('copy-paste');

const github = new GithubClient({
  version: '3.0.0',
});


module.exports = function gistCreate(file, options) {
  const fileContent = fs.readFileSync(file, 'utf-8', (err, data) => {
    if (err) console.error(chalk.red(`Make sure your ${file} exists. \n ${err}`)); // eslint-disable-line
    return data;
  });

  const filesObj = {};
  filesObj[file] = {
    content: fileContent,
  };
  const defaultOptions = {
    description: 'Created with https://www.npmjs.com/package/gist-create',
    public: false,
    files: filesObj,
  };

  const createObj = Object.assign(defaultOptions, options);
  github.gists.create(createObj, (err, res) => {
    if (err) console.log(chalk.red(err));
    copyToClipboard.copy(res.html_url, () => { // eslint-disable-line
      return console.log(chalk.blue(`Copied ${res.html_url} to clipboard!`));
    });
  });
};
