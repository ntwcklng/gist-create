const githubClient = require('github');
const fs = require('fs');
const chalk = require('chalk');
const copyToClipboard = require('copy-paste');

const github = new githubClient({
  version: "3.0.0"
});


module.exports = function(file, options) {
  const public = options.public || false;
  const description = options.description || 'Created with https://www.npmjs.com/package/gist-create';
  const fileContent = fs.readFileSync(file, 'utf-8', (err, data) => {
    if(err) console.log(chalk.red(`Make sure your ${file} exists. \n ${err}`));
    return data;
  });

  const files = {};
  files[file] = {
    'content': fileContent
  }
  const createObj = {
    "description": description,
    "public": public,
    "files": files
  }
  github.gists.create(createObj, (err, res) => {
    if(err) console.log(chalk.red(err));
    copyToClipboard.copy(res.html_url, () => {
      return console.log(chalk.blue(`Copied ${res.html_url} to clipboard!`));
    });
  });
}