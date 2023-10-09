const request = require('supertest')('https://petstore.swagger.io/v2')

module.exports = {
	registerPet: async ({ body }) => {
		const response = await request
			.post('/pet')
			.send(body)

		return response
	}
}