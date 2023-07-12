
describe('New Article', () =>{
    it('Test New Article', () => {
        cy.visit('https://demo.realworld.io/#/login');
        cy.contains("Sign in").click();
        cy.get('[type="email"]').type('m.maximova1989@gmail.com');
        cy.get('[type="password"]').type('m.maximova19891989');
        cy.get('[type="submit"]').click();
        cy.contains('New Article').click();
    })
    })