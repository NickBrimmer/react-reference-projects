require('dotenv').config();

const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');
const Habit = require('../lib/models/Habit');

describe('habit routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates a habit via POST', () => {
    return request(app)
      .post('/api/v1/habits')
      .send({
        title: 'My first habit',
        description: 'You should do this',
        goal: 5
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          title: 'My first habit',
          description: 'You should do this',
          goal: 5,
          progress: 0,
          __v: 0
        });
      });
  });

  it('gets a list of habits via GET', async() => {
    await Habit.create({
      title: 'My first habit',
      description: 'You should do this',
      goal: 5
    });
    
    return request(app)
      .get('/api/v1/habits')
      .then(res => {
        expect(res.body).toEqual([{
          _id: expect.any(String),
          title: 'My first habit',
          description: 'You should do this',
          goal: 5,
          progress: 0,
          __v: 0
        }]);
      });
  });
});
