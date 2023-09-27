const request = require('supertest');
const { app } = require('./app');

describe('/test endpoints', () => {
  it('check if endpoint /hello returns `Hello World!`', async () => {
    const data = await request(app).get('/hello');
    expect(data.statusCode).toBe(200);
    expect(data.body.message).toBe('Hello World!');
  });
  
  it('check if endpoint /req returns `Yo!`', async () => {
    const data = await request(app).get('/req');
    console.log(data.responde);
    expect(data.statusCode).toBe(200);
    expect(data.text).toBe('Yo!');
  });
});
