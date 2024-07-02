import { de, fakerPT_BR as faker, fakerEN } from "@faker-js/faker";

class RandomDice {
  elements = {
    email: () => faker.internet.email(),
    fullNames: () => faker.person.fullName(),
    firstName: () => faker.person.firstName(),
    lastName: () => faker.person.lastName(),
    stringDate: () => faker.date.future().toISOString().slice(0, 10),
    loremParagraph: () => faker.lorem.paragraph(),
    PhoneNumber: () => faker.number.int({ min: 1000000000, max: 1000010000 }),
    number50To100: () => faker.number.int({ min: 50, max: 100 }),
    randonTitle: () => faker.lorem.sentence({ min: 3, max: 5 }),
    linkUrl: () => faker.internet.url(),
    password: () => faker.internet.password({ length: 6 }),
    address: () => faker.location.streetName(true),
    month: () => fakerEN.date.month(),
    day: () => faker.number.int({ min: 1, max: 30 }).toString(),
  };

  getEmail() {
    return this.elements.email();
  }

  getFullNames() {
    return this.elements.fullNames();
  }

  getFirstName() {
    return this.elements.firstName();
  }

  getLastName() {
    return this.elements.lastName();
  }

  getStringDate() {
    return this.elements.stringDate();
  }

  getLoremParagraph() {
    return this.elements.loremParagraph();
  }

  getPhoneNumber() {
    return this.elements.PhoneNumber();
  }

  getNumber50To100() {
    return this.elements.number50To100();
  }

  getRandomTitle() {
    return this.elements.randonTitle();
  }

  getLinkUrl() {
    return this.elements.linkUrl();
  }
  getPassword() {
    return this.elements.password();
  }

  getAddress() {
    return this.elements.address();
  }

  getRandomYear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  getMonth() {
    return this.elements.month();
  }
  getDay() {
    return this.elements.day();
  }
}

export default RandomDice;
