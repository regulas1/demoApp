import pages from '../../../cypress/enums'

describe('user redirects to the open source page', () => {
  it('user selects the open source options from why matomo', () => {
    cy.visitMatomo();
    cy.selectHomePageLinks(pages.WHY_MATOMO.POSITION, pages.WHY_MATOMO.NAME);
    cy.triggerMouseOver(pages.WHY_MATOMO.POSITION);
    cy.clickSubItems(pages.WHY_MATOMO.OPEN_SOURCE.POSITION);
    cy.get('h2').should('contain', 'The main benefits of free and open-source analytics');
  })
  it('checks the page for any broken links', () => {
    cy.visitMatomo();
    cy.selectHomePageLinks(pages.WHY_MATOMO.POSITION, pages.WHY_MATOMO.NAME);
    cy.triggerMouseOver(pages.WHY_MATOMO.POSITION);
    cy.clickSubItems(pages.WHY_MATOMO.OPEN_SOURCE.POSITION);
    cy.get('h2').should('contain', 'The main benefits of free and open-source analytics');
    cy.brokenLinkChecker();
  })
})