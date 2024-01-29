import * as fs from 'fs';

const create = async () => {
	fs.open('fresh.txt', (err) => {
		if (!err) {
			throw new Error('FS operation failed');
		}

		fs.createWriteStream("fresh.txt");
		const data = 'I am fresh and young';
		fs.writeFile('fresh.txt', data, (err) => {
				if (err) throw err;
		});
	})
};

await create();
