import { NextApiResponse, NextApiRequest } from 'next';

export let towns = ["Montpellier", "Paris", "Marseille", "Lyon"]


const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        if (typeof req.body !== 'string') {
            res.status(400).json({ error: 'Request body must be a string' });
        } else {
            towns.push(req.body)
            res.status(200).json({ message: 'well done', towns });
        }
    } else if (req.method === 'GET') {
        res.status(200).json(towns);
    }
    else if (req.method === 'DELETE') {
        const town = req.body;
        const index = towns.indexOf(town);
        if (index === -1) {
            res.status(404).json({ error: 'Town not found' });
        } else {
            towns.splice(index, 1);
            res.status(200).json({ message: 'Town deleted', towns });
        }
    }
};


export default handler;


