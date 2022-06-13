const supertest = require('supertest');
const request = supertest('http://localhost:3000');

describe('Express Route Test', function () {
	it('should return hello world', async () => {
		return request.get('/hello')
			.expect(200)
			.expect('Content-Type', /text/)
			.then(res => {
				expect(res.text).toBe('Hello BENR2423');
			});
	})

	it('login successfully', async () => {
		return request
			.post('/login')
			.send({id: 'eizaz', password: "eizaz1" })
			.expect('Content-Type', /json/)
			.expect(200).then(response => {
				expect(response.body).toEqual(
					expect.objectContaining({
                        _id: expect.any(String),
                        id: expect.any(String),
                        name: expect.any(String),
                        division: expect.any(String),
                        token: expect.any(String),
					})
				);
			});
	});

	it('login failed', async () => {
	})

	it('register', async () => {
	});

	it('register failed', async () => {
	})

	test('should run', () => {
	});
 });