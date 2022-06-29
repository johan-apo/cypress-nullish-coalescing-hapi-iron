/// <reference types="cypress" />
import Iron from "@hapi/iron";

Cypress.Commands.add("seal", () => {
  try {
    const dummyData = {
      a: 1,
      b: 2,
      c: [3, 4, 5],
      d: {
        e: "f",
      },
    };
    const password = "some_not_random_password_that_is_at_least_32_characters";
    Iron.seal(dummyData, password, Iron.defaults).then((sealedData) => {
      console.log(sealedData);
    });
  } catch (error) {
    console.log(error);
  }
});

declare global {
  namespace Cypress {
    interface Chainable {
      seal(): any;
    }
  }
}
