import app from '../src/app';
import request from 'supertest';
import { truncate } from '../truncate';
import { prisma } from '../src/utils/db.server';

beforeEach(async () => {
  await truncate(['Quotes'], prisma);
});
it('#POST connects to server', async () => {
  const res = await request(app).post('/quotes');
  expect(res.status).toBe(200);
});
