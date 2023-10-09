const faker = require('faker-br')

exports.registerPetBody = ({
  id = faker.random.number(),
  categoryId = faker.random.number(),
  categoryName = faker.name.firstName(),
  name = faker.name.firstName(),
  status = 'available'
} = {}) => {
  return {
    id,
    category: {
      id: categoryId,
      name: categoryName
    },
    name,
    photoUrls: [],
    tags: [],
    status
  }
}