//this controls what happens
const fs = require("fs");
const fse = require('fs-extra')
const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
// //go into config and read the desired setup
const {layerConfigurations} = require(path.join(basePath, "/src/config.js"));

const config = layerConfigurations[0].layersOrder;
const mainFolderDir = 'layers';
const copyFolderDir = 'lay'


//rename the folders then initialize the application after application is done rename it back 
const renameFolder =()=> {

   try{
    //  fse.emptyDirSync(path.join(basePath, copyFolderDir))
    //  fs.renameSync(path.join(basePath, copyFolderDir), path.join(basePath, mainFolderDir))
    var check = fse.existsSync(path.join(basePath, mainFolderDir))
      console.log(check);
      if(check) {
        fse.removeSync(path.join(basePath, mainFolderDir))
      }
      fse.mkdirs(path.join(basePath, mainFolderDir));
       




    }
   catch(err){console.log(err)};
   return
}
renameFolder()

// Async/Await:
async function copyFiles (folderName, fileName) {
  try {
    await fse.copy('./'+mainFolderDir+'/'+folderName+'/'+fileName , './'+copyFolderDir+'/'+ folderName + '/' + fileName);
    console.log('success!: copied ' + fileName + ' to ' + folderName);
  } catch (err) {
    console.error(err)
  }
}

//copyFiles('Background', 'Black#1.png')

const intializeCopyFile =(folderName, newFolderArray) => {
   console.log(folderName, newFolderArray);
   newFolderArray.map((file, index)=>{
       copyFiles(folderName, file)
   }) 
 // call the rename function here
   return
}


const picker = (newPath, count, folderName) =>{ 

  var folder = fs.readdirSync(newPath).filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))//this guy create an array of all the element that pass the test
  var newFolderArray = []
  for(var i = 0; i < count; i++) {
    var pickRandomly = Math.floor(Math.random() *((folder.length-1) - 0) - 0);
    newFolderArray.push(folder[pickRandomly]);
  }
 // console.log(folderName, count , newFolderArray );
    //make a copy of the files in the respestive directory
   intializeCopyFile(folderName, newFolderArray);    
   return
  
}

const getPath = ()=>{

    config.map((folder, index)=>{
   //     console.log(folder.name +" = " + folder.count);  
        var newPath = path.join(basePath, mainFolderDir, folder.name);
     //   console.log(newPath)
        picker(newPath, folder.count, folder.name)
        return
    })
}
//getPath()






  
