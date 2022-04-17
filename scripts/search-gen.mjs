import fs from 'fs';
import path from "path";


export function getAllFiles (dirPath, arrayOfFiles) {
    let files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

export function run() {
    console.log('Generating search documents...');
    // directory path
    const srcDir = './src/pages';

    // list all files in the directory
    let files = getAllFiles(srcDir);

    files.forEach(x => {
        console.log(x);
    });
}

run();