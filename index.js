const fs = require('fs');
const path = require('path');

function listAll(localRepo) {
    return new Promise((res, rej) => {
        let resultList = [];
        if (!fs.existsSync(localRepo)) {
            rej('local repo is not existed');
        } else {
            for (let fileName of fs.readdirSync(localRepo)) {
                if (fileName.startsWith('.')) {
                    continue;
                }
                let filePath = path.join(localRepo, fileName);
                explore(filePath, fileName, resultList);
            }
            res(resultList);
        }
    })
}

function explore(parentPath, relatePath, resultList) {
    for (let fileName of fs.readdirSync(parentPath)) {
        if (fileName.startsWith('.')) {
            continue;
        }
        let filePath = path.join(parentPath, fileName);
        if (fs.statSync(filePath).isDirectory()) {
            explore(filePath, relatePath + path.sep + fileName,resultList);
        } else {
            let fileExtension = getFileExtension(fileName);
            if (fileExtension === '.jar' && fileName.indexOf('-source') === -1) {
                resultList.push(createItem(filePath, relatePath + path.sep + fileName, fileName));
            }
        }
    }
}

function createItem(filePath, relatePath, fileName) {

    let splitPath = relatePath.split(path.sep);
    if(splitPath.length < 4){
        return null;
    }
    let version = splitPath[splitPath.length - 2];
    let artifactId = splitPath[splitPath.length - 3];

    
    splitPath.splice(splitPath.length - 3, 3);
    let groupId = '';
    for (let nameIndex in splitPath) {
        let name = nameIndex === 0 ? splitPath[nameIndex] : '.' + splitPath[nameIndex];
        groupId = groupId + name;
    }

    let item = {
        groupId,
        artifactId,
        version,
        filePath,
        fileName,
        relatePath,
    };
    return item;
}

function getFileExtension(fileName) {
    var extensionIndex = fileName.lastIndexOf(".");
    return fileName.substring(extensionIndex, fileName.length);
}

module.exports = {
    listAll
};