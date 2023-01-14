import { NextApiResponse, NextApiRequest } from 'next';
import { towns } from '.';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const name = req.query.townName as string;
            res.status(200).json(towns.includes(name) ? name : "There is no such town");
        }
    } catch (error) {
        console.error(error);
    }
};

export default handler;

