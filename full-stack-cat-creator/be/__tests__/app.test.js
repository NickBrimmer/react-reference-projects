const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');

const request = require('supertest');
const app = require('../lib/app');

describe('demo-be routes', () => {
  beforeAll(async() => {
    const uri = await mongod.getUri();
    return connect(uri);
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(async() => {
    await mongoose.connection.close();
    return mongod.stop();
  });

  it('creates a cat via POST', () => {
    return request(app)
      .post('/api/v1/cats')
      .send({ name: 'garfield', color: 'orange', spicyFactor: 1 })
      .then(res =>  {
        expect(res.body).toEqual({
          _id: expect.anything(),
          name: 'garfield',
          color: 'orange',
          spicyFactor: 1,
          __v: 0
        });
      });
  });

  it('gets all cats via GET', () => {
    return request(app)
      .get('/api/v1/cats')
      .then(res => {
        expect(res.body).toEqual([]);
      });
  });
});
