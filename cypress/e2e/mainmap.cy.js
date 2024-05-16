
describe('MainMap', () => {
  beforeEach(()=>{
    cy.visit('/')
  });


  it('Should contain startup button', () => {
    cy.get('[type=button]').contains('Startup');
    cy.get('h2').contains('Nyabugogo - Kimironko');
    cy.get('span').contains('Distance')
  });

  it('should click startup button and start journey', () => {
    cy.get('[type=button]').contains('Startup').click();
    cy.get('span')
        .should('have.length', 2)
        .contains('Distance')
  });

})