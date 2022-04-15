/* eslint-disable no-undef */
const supertest = require('supertest');

const app = require('./app');
// jest.mock('./models');

// const { thing } = require('./models');

describe('init', async () => {
  it("works", async () => {
    expect(true).toBe(true);
    return true;
  });

  const resp = await supertest(app).get("/");
  expect(resp.statusCode).toBe(200);
});
