
describe('Sign up', () =>{
it('Test Sign Up', () => {
    cy.visit('https://demo.realworld.io/#/login');
    cy.contains("Sign up").click();
    cy.get('[type="text"]').type('Rita');
    cy.get('[type="email"]').type('m.maximova1989@gmail.com');
    cy.get('[type="password"]').type('m.maximova19891989');
    cy.get('.btn').click();
})
})

describe('Sign in', () =>{
    it('Test Sign in', () => {
        cy.visit('https://demo.realworld.io/#/login');
        cy.contains("Sign in").click();
        cy.get('[type="email"]').type('m.maximova1989@gmail.com');
        cy.get('[type="password"]').type('m.maximova19891989');
        cy.get('[type="submit"]').click();
    })
    })

    describe('Logout', () =>{
        it('Test Logout', () => {
            cy.visit('https://demo.realworld.io/#/login');
            cy.get('[type="email"]').type('m.maximova1989@gmail.com');
            cy.get('[type="password"]').type('m.maximova19891989');
            cy.get('.btn').click();
            cy.contains('Settings').click();
            cy.get('button[class="btn btn-outline-danger"]').click();
        })
    })

  

