class ConfirmationModal {
  yesButton = () => cy.get('[data-e2e="action-modal-yes-btn"]');
}
    
module.exports = new ConfirmationModal();
