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
