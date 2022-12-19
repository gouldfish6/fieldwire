class TaskModal {
  enterTitleText = () => cy.get('.task-name');
  titleInput = () => cy.get('.edit-task-name-input');
  confirmButton = () => cy.get('[data-e2e="task-edit-check"]');
  closeButton = () => cy.get('[data-e2e="task-edit-dismiss"]');

  updateTitle(title) {
    this.enterTitleText().click();
    this.titleInput().type(title);
    this.confirmButton().click();
  }
}
    
module.exports = new TaskModal();
