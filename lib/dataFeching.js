import { promises as fs } from 'fs';


export async function getData() {
    const file = await fs.readFile(process.cwd() + '/lib/data.json', 'utf8');
    const objectData = JSON.parse(file);

    return objectData;
}