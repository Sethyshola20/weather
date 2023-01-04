import { NextApiResponse, NextApiRequest } from 'next';
import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const client = new MongoClient(url);
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        const towns = db.collection('towns');
        if (req.method === 'GET') {
            const name = req.query.townName as string;
            const town = await towns.findOne({ name });
            res.status(200).json(town);
        }
    } catch (error) {
        console.error(error);
    } finally {
        client.close();
    }
};

export default handler;
