import { NextApiResponse, NextApiRequest } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const towns = ["Montpellier", "Paris", "Lyon", "Marseille"]

    if (req.method === 'GET') {
        const name = req.query.townName as string; // get the 'name' parameter from the URL
        const town = towns.find(town => town === name); // find the town with the matching name
        res.status(200).json(town);
    }
};

export default handler;
