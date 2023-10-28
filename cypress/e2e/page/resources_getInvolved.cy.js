import pages from '../../enums'

describe('smoke testing the get involved page', () => {
  it('user selects the open source options from get involved page', () => {
    cy.visitMatomo();
    cy.selectHomePageLinks(pages.RESOURCES.POSITION, pages.RESOURCES.NAME);
    cy.triggerMouseOver(pages.RESOURCES.POSITION);
    cy.clickSubItems(pages.RESOURCES.GET_INVOLVED.POSITION);
    cy.get('h1').should('contain', 'The Matomo community');
  })
  it('checks the page for any broken links', () => {
    cy.visitMatomo();
    cy.selectHomePageLinks(pages.RESOURCES.POSITION, pages.RESOURCES.NAME);
    cy.triggerMouseOver(pages.RESOURCES.POSITION);
    cy.clickSubItems(pages.RESOURCES.GET_INVOLVED.POSITION);
    cy.get('h1').should('contain', 'The Matomo community');
    cy.brokenLinkChecker();
  })
})
