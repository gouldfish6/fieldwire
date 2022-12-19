class PlansPage {
  planName = () => cy.get('.floorplan-label-name');
}
    
module.exports = new PlansPage();
