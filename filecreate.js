const fs = require('fs');
//Create a file
  fs.appendFile('myNewFile.txt' , 'Hello Content!' , function(err) {
    if(err) throw err;
    console.log('saved');
  })


//Open the file
  fs.open('myNewFile2.txt' , 'w' , (err) =>{
    if(err)
      throw err;
    console.log('saved');
  })

  //The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created

  fs.writeFile('myNewFile3', 'Content kunai pani' , (err) =>{
    if(err) 
    throw err;
    console.log('saved3');
  })

  //To update the file any of the method can be used such as 
  //appendFile() that keeps the new content at end of the content or writeFile() which completely modifies the content

  fs.appendFile('myNewFile.txt', 'Modified Content' , (err) =>{
    if (err)
      throw err;
    console.log('saved hence again');
  })


  fs.writeFile('myNewFile3', 'Naya Content', (err) =>{
    if (err)
    throw err;
    console.log('replaced the content');
  })

  //delete the file

  fs.unlink('myNewFile.txt', (err) =>{
    if(err)
    throw err;
    console.log('deleted');
  })

  //Rename the file

  fs.rename('myNewFile3' , 'something new' , (err) =>{
    if (err)
    throw err;
    console.log('RENAMED');
  })