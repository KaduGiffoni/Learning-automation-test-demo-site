import RandomDice from "../Classes/randomDice.cy";
import { element } from "../Elements/elements.cy";

const dice = new RandomDice();

class CreateAccount {
  form = {
    firstName: () => cy.get(element.firstName),
    lastName: () => cy.get(element.lastName),
    address: () => cy.get(element.address),
    email: () => cy.get(element.email),
    phone: () => cy.get(element.phone),
    gender: () => cy.get(element.gender),
    hobbies: () => cy.get(element.hobbies.movies),
    languages: () => cy.get(element.languages),
    skills: () => cy.get(element.skills),
    country: () => cy.get(element.country),
    countrySeach: () => cy.get(element.countrySeach),
    birthY: () => cy.get(element.birthDateY),
    birthM: () => cy.get(element.birthDateM),
    birthD: () => cy.get(element.birthDateD),
    password: () => cy.get(element.firstPassword),
    passwordConfirm: () => cy.get(element.secondPassword),
    buttonSubmit: () => cy.get(element.submitButton),
  };

  accountCreate(
    firstName,
    lastName,
    address,
    email,
    phone,
    gender,
    skills,
    country,
    birthY,
    birthM,
    birthD,
    password,
    passwordConfirm
  ) {
    if (firstName === "random") {
      this.form.firstName().type(dice.getFirstName());
      this.form.lastName().type(dice.getLastName());
      this.form.address().type(dice.getAddress());
      this.form.email().type("kadugiffoni@gmail.com");
      this.form.phone().type(dice.getPhoneNumber());
      this.form.gender().check(); //
      this.form.hobbies().check(); // Atualize de acordo com a implementação do método getHobbies
      this.form.languages().click({ force: true });
      this.form.languages().should("be.visible");
      this.form.languages(+" a").contains("Portuguese").click({ force: true });
      cy.get("body").click(600, 300, { force: true });
      this.form.skills().select("Android");
      this.form.country().click();
      this.form.countrySeach().type("Japan{enter}");
      this.form.birthY().select(dice.getRandomYear(1916, 2015).toString());
      this.form.birthM().select(dice.getMonth());
      this.form.birthD().select(dice.getDay());
      this.form.password().type("123456");
      this.form.passwordConfirm().type("123456");
      this.form.buttonSubmit().click();
    } else {
      this.form.firstName().type(firstName);
      this.form.lastName().type(lastName);
      this.form.address().type(address);
      this.form.email().type(email);
      this.form.phone().type(phone);
      this.form.gender().check(gender);
      this.form.hobbies().check(); // Atualize de acordo com os parâmetros fornecidos
      this.form.languages().eq(5).click();
      this.form.skills().eq(7).click();
      this.form.country().eq(3).click();
      this.form.birthY().select(birthY);
      this.form.birthM().select(birthM);
      this.form.birthD().select(birthD);
      this.form.password().type(password);
      this.form.passwordConfirm().type(passwordConfirm);
    }
    this.form.buttonSubmit().click();
  }
}
export default new CreateAccount();
