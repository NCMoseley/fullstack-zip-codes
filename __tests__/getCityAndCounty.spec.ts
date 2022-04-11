import { getRow } from '../pages/api/getCityAndCounty';

test(`should return a city and county`, async () => {
    await expect(getRow(20601)).resolves.toEqual({
        "city": "Waldorf",
        "county": "Charles county"
    })
})