import pages from '../../../cypress/enums'

describe('smoke testing the Tracking Personal Data Page', () => {
  it('user selects the open source options from tracking personal data', () => {
    cy.visitMatomo();
    cy.selectHomePageLinks(pages.USE_CASES.POSITION, pages.USE_CASES.NAME);
    cy.triggerMouseOver(pages.USE_CASES.POSITION);
    cy.clickSubItems(pages.USE_CASES.TRACKING_PERSONAL_DATA.POSITION);
    cy.get('h2').should('contain', 'Peace of mind for even the most data sensitive industries');
  })
  it('checks the page for any broken links', () => {
    cy.visitMatomo();
    cy.selectHomePageLinks(pages.USE_CASES.POSITION, pages.USE_CASES.NAME);
    cy.triggerMouseOver(pages.USE_CASES.POSITION);
    cy.clickSubItems(pages.USE_CASES.TRACKING_PERSONAL_DATA.POSITION);
    cy.get('h2').should('contain', 'Peace of mind for even the most data sensitive industries');
    cy.brokenLinkChecker();
  })
})


