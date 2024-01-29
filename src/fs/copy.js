import * as fs from 'fs';

const sourcePath = './src/fs/files';
const copy = async () => {
    fs.opendir(sourcePath, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }

        fs.mkdir('./src/fs/files_copy', (err) => {
            if (err) {
                throw new Error('FS operation failed');
            }
            const files = fs.readdirSync(sourcePath);
            files.forEach(fileName => {
                const sourceFilePath = `${sourcePath}/${fileName}`;
                const destPath = `./src/fs/files_copy/${fileName}`;
                fs.copyFile(sourceFilePath, destPath, (err) => {
                   if (err) console.log(err)
                });
            })
        });

    });
};

await copy();
