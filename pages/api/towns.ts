import { NextApiResponse, NextApiRequest } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<string[]> => {
    const towns = ["Montpellier", "Paris", "Lyon", "Marseille"]
    if (req.method === 'POST') {
        if (typeof req.body !== 'string') {
            res.status(400).json({ error: 'Request body must be a string' });
        }
        const requestString = req.body;
        towns.push(requestString)

    } else if (req.method === 'GET') {
        res.status(200).json(towns)
    }
    return towns
}

export default handler