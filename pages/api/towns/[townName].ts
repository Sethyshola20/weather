import { NextApiResponse, NextApiRequest } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const name = req.query.townName as string;
            res.status(200).json({ name });
        }
    } catch (error) {
        console.error(error);
    }
};

export default handler;

