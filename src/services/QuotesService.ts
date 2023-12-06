// import { Quotes } from '@prisma/client';
import { prisma } from '../utils/db.server';
import { QuoteSelect } from '../types';

export default class QuotesService {
  static async getAllQuotes(): Promise<QuoteSelect[]> {
    const quotes = await prisma.quotes.findMany();
    return quotes;
  }

  static async getQuoteById(id: number): Promise<QuoteSelect | null> {
    const quoteById = await prisma.quotes.findUnique({
      where: {
        id,
      },
    });
    return quoteById;
  }
}
