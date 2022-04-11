import prisma from '../../prisma/client';

export async function getRow(zipCode: number) {
    const result = await prisma.entries.findUnique({
        where: {
            zip_code: zipCode
        }
    });

    let readyResult = {} as any;

    if (result) {
        readyResult ={
            city: result.city,
            county: result.county,
        }
    }

    return readyResult;
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

        const result = await getRow(zipCode);

        console.log('GET_CITY_AND_COUNTY:', result)

        return res.status(200).json({ result });
    } catch (error) {
        console.error('error:', error);
        return res.status(404).json(error);
    }
};