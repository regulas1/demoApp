const pages = {
      /**
     * get the page name as follows: 
     * @see read.me
     * @example
     *  cy.selectHomePageLinks(1, 'Why Matomo?');
     *  can be replaced by cy.selectHomePageLinks(pages.WHY_MATOMO.POSITION, pages.WHY_MATOMO.NAME);
     */
   WHY_MATOMO:{
    POSITION:1,
    NAME: 'Why Matomo?',
    OPEN_SOURCE:{
        NAME: 'Open Source',
        POSITION: 4
    }
   },
   USE_CASES:{
    POSITION:10,
    NAME: 'Use Cases',
    TRACKING_PERSONAL_DATA:{
        NAME: 'Tracking Personal Data',
        POSITION: 15
    }
   },

   RESOURCES:{
    POSITION:27,
    NAME: 'Resources',
    GET_INVOLVED:{
        NAME: 'Get Involved',
        POSITION: 28
    }
   },

}

export default pages;
