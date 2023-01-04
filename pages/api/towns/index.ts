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
        if (req.method === 'POST') {
            if (typeof req.body !== 'string') {
                res.status(400).json({ error: 'Request body must be a string' });
            } else {
                await towns.insertOne({ name: req.body });
                const allTowns = await towns.find().toArray();
                res.status(200).json({ message: 'well done', data: allTowns });
            }
        } else if (req.method === 'GET') {
            const allTowns = await towns.find().toArray();
            res.status(200).json(allTowns);
        }
    } catch (error) {
        console.error(error);
    } finally {
        client.close();
    }
};

export default handler;
