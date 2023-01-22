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
};

export default handler;


