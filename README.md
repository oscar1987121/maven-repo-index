# maven-repo-index

A tool for managing the local repository.

# Installation

`npm install maven-repo-index`

# Usage

Include into your JavaScript app using:

```js
const mavenRepo = require('maven-repo-index');
mavenRepo.listAll('/your/repo/url');
```
# API

| API | What it does |
|`.listAll(repoFolderUrl) | list all the jar info in the repository |

## listAll

- `listAll(repoFolderUrl)` provide the local repository url, it will response the list of dependencies
response json field
```json
{
    groupId: 'group id',
    artifactId : 'artifact id',
    version: 'version',
    filePath: 'absolute url',
    fileName: 'jar full name',
    relatePath: 'relative rul'
}
```
