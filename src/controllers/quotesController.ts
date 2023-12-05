import { Request, Response, Router } from 'express';
import QuotesService from '../services/QuotesService';

export default Router().get('/', async (req: Request, res: Response) => {
  try {
    const data = await QuotesService.getAllQuotes();
    res.json(data);
  } catch (error) {
    console.error(error);
  }
});
