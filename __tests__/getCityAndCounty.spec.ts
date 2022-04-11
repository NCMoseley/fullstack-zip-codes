import { getRow } from '../pages/api/getCityAndCounty';

// Valid Zip
test(`should return a city and county`, async () => {
    await expect(getRow(20601)).resolves.toEqual({
        "city": "Waldorf",
        "county": "Charles county"
    })
})

// Zip not included in lookup table
test(`should return an empty object`, async () => {
    await expect(getRow(20699)).resolves.toEqual({})
})