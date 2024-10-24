import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prismaGlobal: PrismaClient | undefined;
}

export const db = globalThis.prismaGlobal || new PrismaClient();

if(process.env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = db;
}

/* > yha pe humne prisma client ko globalThis me store kiya hai taki hot reload pe bar bar naya prisma client create na ho
   > globalThis hot relaod se affected nahi hota hai
*/