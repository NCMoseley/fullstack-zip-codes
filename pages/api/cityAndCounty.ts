import prisma from '../../prisma/client';

export async function getCityAndCounty(zipCode: number) {
    const result = await prisma.entries.findUnique({
        where: {
            zip_code: zipCode
        }
    });

    return result;
}

export default async (req, res) => {
    try {
        let { zipCode } = req.query;

        if (!zipCode) {
            zipCode = req.body.zipCode;
        }

        if (!zipCode) {
            console.log('Missing zip code:', req.query, req.body)
            throw new Error('Missing zip code');
        }

        const result = await getCityAndCounty(zipCode);

        return res.status(200).json({ result });
    } catch (error) {
        console.error('error:', error);
        return res.status(404).json(error);
    }
};