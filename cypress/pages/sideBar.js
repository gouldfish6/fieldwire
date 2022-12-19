class SideBar {
  projectName = () => cy.get('.project-name');
  deleteButton = () => cy.get('.fa-trash');
}
  
module.exports = new SideBar();
