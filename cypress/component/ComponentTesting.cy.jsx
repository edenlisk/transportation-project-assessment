
import RideMetrics from "../../src/components/RideMetrics.jsx";
describe('Ride Metrics Component', () => {

  it('Loading page before map loading',  () => {
    cy.mount(<RideMetrics distance={"3.5 km"} durations={'4 mins'} nextStopAddress={"Kakiru bus stop"}/>)
    cy.get('h2').should('have.length', 1)
    cy.get('span')
        .should('have.length', 2)
        .contains("3.5 km")
    cy.get('span').contains('Time: 4 mins')
  });
})
