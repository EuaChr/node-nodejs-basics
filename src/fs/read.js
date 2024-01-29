import * as fs from 'fs';

const read = async () => {
    fs.readFile('./src/fs/files/fileToRead.txt','utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
};

await read();
