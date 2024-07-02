import CreateAccount from "../Pages/createAccount.cy";

describe("teste", () => {
  it("teste", () => {
    cy.visit("https://demo.automationtesting.in/Register.html");
  });
  it("cadastate", () => {
    CreateAccount.accountCreate("random");
  });

  // Finalizado apos constatar não ser possivel finalizar um cadastro devido ao input country não ser preenchivel.
});
