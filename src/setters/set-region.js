import updater from '../file-upduter.js';
import getId from '../getters/get-id.js';
import readlineSync from 'readline-sync'

const region = (fPath) => {
    const newRegion = readlineSync.question('New region:').toLowerCase().trim();
    const id = getId(fPath);
    updater(fPath, `\n${id}|${newRegion}`);
};

region('data/regions.csv')
export default region;