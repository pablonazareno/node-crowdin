#!/usr/bin/env node
'use strict';

var program = require('commander');
var scripts = require('./scripts.js');
program.version('0.0.1');

program
	.command('download')
	.description('Download traductions from Crowdin.')
	.action(function() {
		scripts.downloadCrowdin(console.log);
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
	.option('-m, --merge', 'Merge with existing traductions.')
	.action(function(option) {
		scripts.uploadCrowdin(option.merge);
	});

program
	.command('generate')
	.description('Scan scr code and generate traductions files.')
	.action(function() {
		scripts.generateFile(scripts.KEYS_FILE, console.log);
	});

program.parse(process.argv);
