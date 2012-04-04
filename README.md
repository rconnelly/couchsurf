# CouchSurf

This small command line tool for updating meta data based on

## Atomic Parsley
This app requires Atomic Parsley to be installed. This is pretty straight forward:

    brew install automicparsley

## Usage

From within the base node directory, run

    node . -f <mp4-file-name> -r <regex-data-file>

## RegEx File

The application uses "regexs" to figure out how to pull the data from the file name. You can see the example file for
ideas. By default, the app will use the version that ships with the app in the data folder.

    [
        {"name":"1", "regex" : "^(?<name>[a-zA-Z0-9\\.\\s]+)\\.(?<seasonNumber>[0-9]{1,2})[Xx](?<episodeNumber>[0-9]{1,2})\\.(?<episodeName>[a-zA-Z0-9\\.]+)(\\.720[Pp].*)?(?<ext>\\.[a-zA-Z0-9]{1,})$"},
        {"name":"2", "regex" : "^(?<name>[a-zA-Z0-9\\.\\s]+)\\.[Ss](?<seasonNumber>[0-9]{1,2})[Ee](?<episodeNumber>[0-9]{1,2})\\.([a-zA-Z0-9\\.]+).*(?<ext>\\.[a-zA-Z0-9]{1,})$"},
        {"name":"3", "regex" : "^(?<name>[a-zA-Z0-9\\.\\s]+)\\.(?<year>[0-9]{4})\\.(?<month>[0-9]{2})\\.(?<day>[0-9]{2})\\..*(?<ext>\\.[a-zA-Z0-9]{1,})$"},
        {"name":"4", "regex" : "^(?<name>[a-zA-Z0-9\\.\\s]+)\\.(?<year>[0-9]{4})\\.(?<month>[0-9]{2})\\.(?<day>[0-9]{2})\\..*(?<ext>\\.[a-zA-Z0-9]{1,})$"},
        {"name":"5", "regex" : "^(?<name>[a-zA-Z0-9\\.\\s]+)\\s?-\\s?([a-zA-Z0-9\\s]+.*).*(?<ext>\\.[a-zA-Z0-9]{1,})$"}
    ]