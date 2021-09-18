//this controls what happens
const fs = require("fs");
const fse = require('fs-extra')
// const path = require("path");
// const isLocal = typeof process.pkg === "undefined";
// const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
// //go into config and read the desired setup
// const {layerConfigurations} = require(path.join(basePath, "/src/config.js"));

// const config = layerConfigurations[0].layersOrder;
// const workingDir = 'lay';


// const copyLayerDirectory = (workingDir)=>{
//     config.map((item, index)=>{
//         console.log(item.name +" = " + item.count);  
//     })
// }

//create a copy of the directory as working directory
// const makeWorkingDirectory = () =>{
//     fs.mkdirSync(path.join(basePath,workingDir),{ recursive :true });

// }
// // delete directory after build is done
// fse.copy('../layers/Background', '../lay')
//   .then(() => console.log('success!'))
//   .catch(err => console.error(err))

  // Async/Await:
async function copyFiles () {
    try {
      await fse.copy('/layers/Background', '/lay')
      console.log('success!')
    } catch (err) {
      console.error(err)
    }
  }
  
  copyFiles()
  
