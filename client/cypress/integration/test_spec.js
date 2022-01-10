

describe('initial test', () => {
    it ('user can click login', () => {
        cy.viewport(1980,1200)
        //open app
        cy.visit('http://localhost:3000');

        cy.contains('p','Login').click();
        cy.get('input[name="signInEmail"]').type("12312312@gmail.com");
        cy.get('input[name="signInPassword"]').type("123123");
        // cy.get('button[name="signInButton"]').click();
        // cy.get('button').contains('Connect with Google').click();
    });

});