var Book = require('./book');
var cli = require('./cli');
var nodeFS = require('./cli/helper').nodeFS;

module.exports = {
    Book: Book,
    commands: cli.commands,
    nodeFS: nodeFS
};
