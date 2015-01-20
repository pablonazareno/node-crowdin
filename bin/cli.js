#!/usr/bin/env node

var program = require('commander');
var scripts = require('./scripts.js');
program.version('0.0.1');

program
	.command('download')
 	.description('Download traductions from Crowdin.')
	.action(function() {
		scripts.downloadCrowdin();
	});

program
	.command('create')
 	.description('Initialize traductions in Crowdin.')
	.action(function() {
		scripts.createCrowdin();
	});


program
	.command('upload')
 	.description('Scan scr code and upload new traductions to Crowdin.')
	.action(function() {
		scripts.uploadCrowdin();
	});

program
        .command('generate')
        .description('Scan scr code and generate traductions files.')
        .action(function() {
                scripts.generateFile(console.log);
        });

program.parse(process.argv);
