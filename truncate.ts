import { PrismaClient } from '@prisma/client';

export async function truncate(
  tableNames: string[],
  prisma: PrismaClient,
): Promise<void> {
  const tables = tableNames.map((table) => `"${table}"`).join(', ');
  try {
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${tables} CASCADE`);
  } catch (error) {
    console.error(error);
  }
}
