import { getNumberOfEntries } from '../functions-without-context'
import lookupTable from "../data/Zip_Code_Lookup_Table.json"

const numOfItems = lookupTable.length

test(`number of items in entries table should be ${numOfItems}`, async () => {
    await expect(getNumberOfEntries()).resolves.toEqual(numOfItems)
})