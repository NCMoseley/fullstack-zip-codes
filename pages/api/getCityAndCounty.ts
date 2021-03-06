import prisma from '../../prisma/client';

export async function getRow(zipCode: number) {
    const result = await prisma.entries.findUnique({
        where: {
            zip_code: Number(zipCode)
        }
    });

    interface IResult {
        city: string;
        county: string;
    }

    let readyResult = {} as IResult;

    if (result) {
        readyResult ={
            city: result.city,
            county: result.county,
        }
    }

    return readyResult;
}

const getCityAndCounty = async (req, res) => {
    try {
        let { zipCode } = req.query;

        if (!zipCode) {
            zipCode = JSON.parse(req.body);
        }

        if (!zipCode) {
            const error = {code: '400', message: 'Missing zip code'};
            return res.status(400).json({ result: error });
        }

        const result = await getRow(zipCode);

        console.log('GET_CITY_AND_COUNTY:', result);

        if (!result.city) {
            const error = {code: '404', message: 'Zip Code not found'}
            return res.status(404).json({ result: error });
        }

        return res.status(200).json({ result });
    } catch (error) {
        console.error('error:', error);
        return res.status(500).json(error);
    }
};

export default getCityAndCounty;