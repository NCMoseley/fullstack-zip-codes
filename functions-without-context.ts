import prisma from './prisma/client'

export async function getNumberOfEntries() {
    const items: any = await prisma.entries.findMany({});

    const result: number = items.length;

    return result
}