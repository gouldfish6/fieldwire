class DeleteProjectnModal {
  projectNameInput = () => cy.get('[ng-model="confirmInput"]');
  deleteButton = () => cy.get('[data-e2e="delete-proj-modal-delete-btn"]');
}
    
module.exports = new DeleteProjectnModal();
