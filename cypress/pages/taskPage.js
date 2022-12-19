class TaskPage {
  newTaskButton = () => cy.get('[data-e2e="create-new-task"]');
  taskTitle = () => cy.get('[data-e2e="task-name-ontaskpage"]');
}
  
module.exports = new TaskPage();
