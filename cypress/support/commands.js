// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('visitMatomo', () => { 
    cy.visit('https://matomo.org/')
    cy.get('p').contains('No credit card required.').should('be.visible');
})
//
//
Cypress.Commands.add('selectHomePageLinks', (position,megamenulink ) => { 
    cy.get('.mega-menu-link').eq(position).contains(megamenulink);
})


Cypress.Commands.add('triggerMouseOver', (position ) => { 
    cy.get('.mega-menu-link').eq(position).trigger('mouseover').wait(1000);
})

Cypress.Commands.add('clickSubItems', (position) => { 
    cy.get('.mega-menu-item-type-custom').eq(position).click({ force: true }).should('be.visible').click();
})

Cypress.Commands.add('brokenLinkChecker', () => {
    // Get all 'a' elements and iterate over them
    cy.get('a').each((link) => {
      const href = link.prop('href');
      cy.log('Checking link: ' + href);

      if (href) {
        cy.request({
          url: href,
          failOnStatusCode: false, 
        }).then((response) => {
          if (response.status >= 400) {
            cy.log('Broken link: ' + href + ' - Status Code: ' + response.status);
          }
        });
      }
    });
  });



// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })