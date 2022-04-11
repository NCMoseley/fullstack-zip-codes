import { PrismaClient, Prisma } from '@prisma/client';
import lookupTable from '../data/Zip_Code_Lookup_Table.json';

const prisma = new PrismaClient();

const zipData: Prisma.EntriesCreateInput[] = lookupTable;

async function main() {
    console.log(`Start seeding ...`);
    const rows = await prisma.entries.createMany({
        data: zipData,
        skipDuplicates: true
    });
    console.log(`Seeding finished.`, rows);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
