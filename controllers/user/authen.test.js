/* eslint-disable no-undef */

const request = require('supertest');
const makeApp = require('./../../app');
const { jest } = require('@jest/globals');

const createUser = jest.fn();
const app = makeApp({ createUser });

describe('auth ', () => {
  
	test("should save the username and password in the database", async() => {
		const body = {
		  username: "username",
		  password: "password"
		}
		 await request(app).post("/users").send(body)
		expect(createUser.mock.calls[0][0]).toBe(body.username)
		expect(createUser.mock.calls[0][1]).toBe(body.password)
	  })
	test('add', () => {
    expect(3).toBe(3);
  });

  it('should ', () => {
    const mock = jest.fn();
    console.log(mock());
  });
});
