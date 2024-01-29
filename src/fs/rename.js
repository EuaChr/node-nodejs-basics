import * as fs from 'fs';

const rename = async () => {
    fs.open('./src/fs/files/wrongFilename.txt', (err) => {
        if (err) {
            throw new Error('FS operation failed')
        };

        fs.open('./src/fs/files/properFilename.md', (err) => {
          if (!err) {
              throw new Error('FS operation failed')
          };
          fs.renameSync('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md');
        })
    });
};

await rename();
