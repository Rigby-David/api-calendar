import { Quote } from '../src/types';
import { prisma } from '../src/utils/db.server';

async function seed() {
  await Promise.all(
    getQuotes().map((quote) => {
      return prisma.quotes.create({
        data: {
          film: quote.film,
          author: quote.author,
          quote: quote.quote,
        },
      });
    }),
  );
}

seed();

function getQuotes(): Array<Quote> {
  return [
    { film: 'Die Hard', author: 'John McClane', quote: 'Hello there' },
    { film: 'Die Hard', author: 'Hans Gruber', quote: 'Good bye' },
  ];
}

export { seed };
