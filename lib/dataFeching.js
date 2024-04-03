import fsPromises from 'fs/promises';
import path from 'path'

export async function getData() {
    const filePath = path.join(process.cwd(), 'lib/data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData.toString());

    return objectData;
}