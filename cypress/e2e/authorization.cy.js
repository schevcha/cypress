import { faker } from '@faker-js/faker';
import example from '../fixtures/example';

describe('Sign Up', () => {

    const username = faker.internet.userName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    it('should do register user', () => {
        cy.visit('/');
        cy.get('.navbar a[href$="/register"]').click();
        cy.url().should('include', '/#/register');
        cy.get('.auth-page h1').should('have.text', 'Sign up');
        cy.get('.auth-page form').should('be.visible');
        cy.get('.auth-page form input[ng-model$=username').type(username);
        cy.get('.auth-page form input[ng-model$=email]').type(email);
        cy.get('.auth-page form input[ng-model$=password]').type(password);
        cy.get('.auth-page form button[type=submit]').click();
        cy.get('.navbar').should('contain.text', username);
    })
})

describe('Sign In', () => {

    it('should do login user', () => {
        cy.visit('/');
        cy.get('.navbar a[href$="/login"]').click();
        cy.url().should('include', '/#/login');
        cy.get('.auth-page h1').should('have.text', 'Sign in');
        cy.get('.auth-page form').should('be.visible');
        cy.get('.auth-page form input[ng-model$=email]').type(example.email);
        cy.get('.auth-page form input[ng-model$=password]').type(example.password);
        cy.get('.auth-page form button[type=submit]').click();
        cy.get('.navbar').should('contain.text', example.username);
    })
})

describe('Logout', () => {
    it('should do logout user', () => {
        cy.visit('/');
        cy.get('.navbar a[href$="/login"]').click();
        cy.url().should('include', '/#/login');
        cy.get('.auth-page h1').should('have.text', 'Sign in');
        cy.get('.auth-page form').should('be.visible');
        cy.get('.auth-page form input[ng-model$=email]').type(example.email);
        cy.get('.auth-page form input[ng-model$=password]').type(example.password);
        cy.get('.auth-page form button[type=submit]').click();
        cy.get('.navbar').should('contain.text', example.username);
        cy.get('.navbar a[href$="/settings"]').click();
        cy.get('.settings-page h1').should('have.text', 'Your Settings');
        cy.get('.settings-page button[ng-click*=logout]').click();
        cy.get('.navbar').should('not.contain.text', example.username);
    });
})