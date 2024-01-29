import * as fs from 'fs';


const read = async () => {
   const stream = fs.createReadStream('./src/streams/files/fileToRead.txt');
   stream.on('data', chunk => {
    console.log(chunk)
   } )

};

await read();