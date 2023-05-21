import { generateFakeArticle, generateFakeUser } from '../../js_examples/faker';
import login from '../support/login';
import example from '/cypress/fixtures/example.json';

const article = generateFakeArticle();
const title = article.title

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
        cy.get('.editor-page').as('addArticlePage');

        cy.get('@addArticlePage').find('form')
            .should('be.visible').as('addArticleForm');

        cy.get('@addArticleForm').find('input[ng-model$=title]').type(title);
        cy.get('@addArticleForm').find('input[ng-model$=description]').type(article.description);
        cy.get('@addArticleForm').find('input[ng-model$=tagField]').as('articleTagInput');
        for (const tag of article.tags) {
            cy.get('@articleTagInput').type(tag).type('{enter}');
        }
        cy.get('@addArticleForm').find('textarea[ng-model$=body]').type(article.body);
        cy.get('@addArticleForm').find('button[type=button]').click();

        cy.get('.article-page').as('articlePage');
        cy.get('@articlePage').find('h1').should('contains.text', title);

        cy.get('@articlePage').find('.tag-list').as('articleTags');
        for (const tag of article.tags) {
            cy.get('@articleTags').should('contain.text', tag);
        }
    })

    it('Delete article', () => {

        // open my articles
        cy.get('@appHeader').contains('a', example.username).click();
        cy.url().should('include', example.username);

        // delete an article
        cy.get('article-list').should('be.visible').as('myArticles');
        cy.get('@myArticles').contains(title)
            .parents('article-preview')
            .find('a.preview-link').click();
        cy.get('.article-actions span:not(.ng-hide) button').click();

        cy.url().should('eq', 'https://demo.realworld.io/#/');

        // check the article was delete
        cy.get('@appHeader').contains('a', example.username).click();
        cy.get('@myArticles').should('have.length', 0);

    })
})

