import * as fs from 'fs';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    let text;
    fs.readFile('./src/fs/files/fileToRead.txt','utf8', (err, data) => {
        if (err) throw err;
       text = data;

       const hash = createHash('sha256').update(text).digest('hex');
       console.log('TXT: ', text, ' HASH: ', hash)

      });
};

await calculateHash();

