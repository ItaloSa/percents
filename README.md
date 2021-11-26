
<img src="./docs/logo.png" alt="percents">

percenTS
========

A TypeScript migration status tool

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![License](https://img.shields.io/npm/l/percents.svg)](https://github.com/ItaloSa/percents/blob/master/package.json)
[![Version](https://img.shields.io/npm/v/percents.svg)](https://npmjs.org/package/percents)
[![Downloads/week](https://img.shields.io/npm/dw/percents.svg)](https://npmjs.org/package/percents)


* [Usage](#usage)
* [Options](#options)
### Usage

```sh-session
$ npm install -g percents
$ percents
% scanning src... done 

╔ RESULTS 
║ 
╠ Total: 4 
╠ JavaScript files: 3 
╠ TypeScript files: 1 
╠ Migration status: 25.00% 
║ 
╚ by percents
```

### Options

| Option        | Short | Description                          | Default |
|---------------|-------|--------------------------------------|---------|
| --version     | -v    | Prints the current version           | -       |
| --version     | -h    | Prints the help                      | -       |
| --path="path" | -p    | Sets the path where will be analyzed | src     |
