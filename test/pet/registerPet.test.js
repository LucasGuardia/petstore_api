const expect = require('chai').expect

const { registerPet } = require('../../support/routes/pet/routes')
const { registerPetBody } = require('../../fixtures/requests/pet/registerPetBody')

describe('Pet Suite - Register', () => {

	it('Register a Pet successfully', async () => {
		const response = await registerPet({ body: registerPetBody() })

		expect(response.status).to.be.eql(200)
	})

	it('Register a Pet with an empty body', async () => {
		const response = await registerPet({ body: {} })

		expect(response.status).to.be.eql(200)
	})

})