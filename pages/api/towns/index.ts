import { NextApiResponse, NextApiRequest } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        if (typeof req.body !== 'string') {
            res.status(400).json({ error: 'Request body must be a string' });
        } else {
            res.status(200).json({ message: 'well done' });
        }
    } else if (req.method === 'GET') {
        res.status(200).json({});
    }
};

export default handler;


