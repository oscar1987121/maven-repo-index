# maven-repo-index

A tool for managing the local repository.

# Installation

`npm install maven-repo-index`

# Usage

Include into your JavaScript app using:

```js
const mavenRepo = require("maven-repo-index");
mavenRepo.listAll("/your/repo/url");
```

# API

| API                       | What it does                            |
| ------------------------- | --------------------------------------- |
| `.listAll(repoFolderUrl,respondType)` | list all the jar info in the repository |

## listAll

`listAll(repoFolderUrl,respondType)` provide the local repository url, it will response the list of dependencies

- `respondType="object"`

### response object

```json
{
  "groupId-A": {
    "artifactId-A": {
      "version.1.0.0": {
        "groupId": "group id",
        "artifactId": "artifact id",
        "version": "version",
        "filePath": "absolute url",
        "fileName": "jar full name",
        "relatePath": "relative rul"
      }
    }
  }
}
```

- `respondType="array"` is defualt type if it not provided

### response array

```json
[
  {
    "groupId": "group id",
    "artifactId": "artifact id",
    "version": "version",
    "filePath": "absolute url",
    "fileName": "jar full name",
    "relatePath": "relative rul"
  }
]
```
