import { generateFakeArticle, generateFakeUser } from '../../js_examples/faker';
import login from '../support/login';

// const article = generateFakeArticle();
// const user = generateFakeUser();

describe('Article', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.get('.navbar').should('be.visible').as('appHeader');
        login();
    });

    it('Publish article', () => {
        cy.url().should('include', '/#/');
        cy.get('@appHeader').find('a[href$="/editor/"]').click();
        cy.url().should('include', '/#/editor/');
    })
})

