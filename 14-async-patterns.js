const { readFile, writeFile } = require('fs').promises;

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, res) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(res);
//             }
//         })
//     })
// }

// getText('./content/first.txt').then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        console.log(first, second);
        await writeFile('./content/result.txt', `Result: ${first}, ${second}\n`);
    } catch (err) {
        console.log(err);
    }
}

start();
 