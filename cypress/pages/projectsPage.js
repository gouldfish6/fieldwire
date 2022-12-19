import DeleteProjectModal from "./deleteProjectModal";

class ProjectsPage {
  newProjectLink = () => cy.get('.new-project');
  menuButton = function(projectName) {
    return cy.get(`[data-e2e="${projectName}-project-card-menu"]`);
  };
  deleteButton = function(projectName) {
    return cy.get(`[data-e2e="${projectName}-project-delete"]`);
  };

  deleteProject(projectName) {
    this.menuButton(projectName).click();
    this.deleteButton(projectName).click();
    DeleteProjectModal.projectNameInput().type(projectName);
    DeleteProjectModal.deleteButton().click();
  }
}
    
module.exports = new ProjectsPage();
