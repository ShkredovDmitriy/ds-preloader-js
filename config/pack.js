(async function(){

  const fs = require('fs');
  var rimraf = require("rimraf");
  const { exec } = require('child_process');

  function prom() {
    return new Promise((resolve) => {
      rimraf("pack", function () { 
        console.log("Done! Folder pack removed");
        resolve();
      })
    });
  }

  async function directoryCreate(folderName) {
    return new Promise((resolve) => {
      fs.mkdir(folderName, (err) => {
        if (err) throw err;
        else {
          console.log(`Done! Folder ${folderName} created`);
          resolve();
        }
      });
    });
    
  }

  async function fileCopy(fromFile, toFile) {
    return new Promise((resolve) => {
      fs.copyFile(fromFile, toFile, (err) => {
        if (err) throw err;
        else {
          console.log(`Done! File ${fromFile} copied to ${toFile}`);
          resolve();
        }
      });
    }); 
  }

  await prom();
  await directoryCreate("pack")
  await directoryCreate("pack/dist")
  await fileCopy('index.js', 'pack/index.js')
  await fileCopy('README.md', 'pack/README.md')
  await fileCopy('package-pack.json', 'pack/package.json')
  await fileCopy('docs/js/main.min.js', 'pack/dist/ds-preloader.min.js')
  await fileCopy('docs/css/main.min.css', 'pack/dist/ds-preloader.min.css')

  const ls = exec('cd pack && npm publish', function (error, stdout, stderr) {
    if (error) {
      console.log(error.stack);
      console.log('Error code: '+error.code);
      console.log('Signal received: '+error.signal);
    }
    console.log('Child Process STDOUT: '+stdout);
  });

})()