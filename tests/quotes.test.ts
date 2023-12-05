import app from '../src/app';
import request from 'supertest';
// import { truncate } from '../truncate';
// import { prisma } from '../src/utils/db.server';

// beforeEach(async () => {
//   await truncate(['Quotes'], prisma);
// });
it('#POST connects to server', async () => {
  const res = await request(app).post('/quotes');
  expect(res.status).toBe(200);
});
it('#GET returns first row from quotes table', async () => {
  const res = await request(app).get('/quotes');
  console.log('res', res);
  expect(res.status).toBe(200);
  expect(res.body.length).toEqual(2);
  expect(res.body[0]).toEqual({
    id: expect.any(Number),
    film: expect.any(String),
    author: expect.any(String),
    quote: expect.any(String),
  });
});
it.only('#GET return all rows from quotes table', async () => {
  const res = await request(app).get('/quotes');
  expect(res.body.length).toEqual(2);
});
