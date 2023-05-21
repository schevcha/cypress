const { faker } = require('@faker-js/faker');

export function generateFakeArticle() {
    return {
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        tags: [
            faker.word.adjective(),
            faker.word.adjective(),
            faker.word.adjective()
        ],
        body: faker.lorem.paragraphs()
    };
}

export function generateFakeUser() {
    return {
        uid: faker.number.int(),
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        about: faker.person.bio(),
        job: faker.person.jobArea(),
        company: faker.person.jobTitle(),
        address: {
            avatar: faker.image.avatar(),
            country: faker.location.country(),
            city: faker.location.city(),
            street: faker.location.street(),
            zipCode: faker.location.zipCode(),
        }
    };
}