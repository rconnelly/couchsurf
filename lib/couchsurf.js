#!/usr/bin/env node


var cli = require('cli'),
    fs = require('fs'),
    path = require('path'),
    match = require('match'),
    util = require('util');

var spawn = require('child_process').spawn;

cli.parse({
    regexFile:   ['r', 'Location of the regex file.', 'path', 'data/regex.json'],
    videoFile:   ['f', 'File to parse.', 'path', '']
});

var getMatchedGroups = function(fileName, regexData)
{
    var groups = [];
    regexData.forEach(function(regexTuple)
    {
        var g = match.all(fileName,regexTuple.regex);
        if(g.length > 0 && groups.length == 0)
        {
            groups = g;
        }
    });

    return groups;
}

cli.main(function (args, options) {
    var output = '', i, j, l, output_stream;

    if(options.regexFile)
    {
        fs.readFile(options.regexFile, 'utf-8', function(err,data){
                if(err) {
                    console.error("Could not open file: %s", err);
                    process.exit(1);
                }


            var groups = getMatchedGroups(path.basename(options.videoFile), JSON.parse(data));
            var name = groups[0].name.replace(/\./gi,' ');
            var episodeName = (groups[0].episodeName) ? groups[0].episodeName.replace(/\./gi,' ') : '';
            console.log(groups);
            var params = util.format('%s,--overWrite,--TVShowName,%s,--TVEpisode,%s,--title,%s', options.videoFile,
                name, episodeName, name).split(",");
            console.log(params);
            var atomicparsley = spawn('atomicparsley', params);

            atomicparsley.stdout.on('data', function (data) {
                console.log('stdout: ' + data);
            });

            atomicparsley.stderr.on('data', function (data) {
                console.log('error: ' + data);
            });
            atomicparsley.on('exit', function (code, signal) {
                //console.log('child process terminated due to receipt of signal '+signal);
            });
        });

    }
});
