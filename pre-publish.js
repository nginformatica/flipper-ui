const fse = require('fs-extra')

async function copyFiles() {
    try {
        await fse.copy('./package.json', './dist/package.json')
        await fse.copy('./LICENSE', './dist/LICENSE')
        await fse.copy('./README.md', './dist/README.md')
    } catch (err) {
      console.error(err)
    }
}

copyFiles()
