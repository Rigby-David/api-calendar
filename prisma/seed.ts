import { prisma } from '../src/utils/db.server';

interface Quote {
  film: string;
  author: string;
  quote: string;
}

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
