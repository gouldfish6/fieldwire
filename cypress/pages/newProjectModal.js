import ConfirmationModal from "../pages/confirmationModal";

class NewProjectModal {
  // First step
  projectNameInput = () => cy.get('.project-name-input');
  createButton = () => cy.get('[data-e2e="new-project-modal-create-btn"]');
  
  // Plan step
  noPlansLink = () => cy.get('a').contains('I don\'t have plans');

  // Category step
  categoryNameInput = () => cy.get('[name="newCategoryForm"] .category-name-input');
  addCategoryButton = () => cy.get('[data-e2e="project-wizard-category-add-btn"]');

  // Invite step
  emailInput = () => cy.get('.invite-user-form input[name="email"]');
  roleDropdown = () => cy.get('[name="role"]');
  inviteButton = () => cy.get('[data-e2e="project-wizard-invite-btn"]');

  // App step
  phoneInput = () => cy.get('#phone');
  textMeALinkButton = () => cy.get('[data-e2e="project-wizard-text-lnk-btn"]');

  // Shared next button
  nextButton = () => cy.get('[data-e2e="project-wizard-next-btn"]');

  // Creates a new project with the given name
  newProjectFlow(projectName) {
    this.projectNameInput().type(projectName);
    this.createButton().click();
  }

  // Adds example plans
  addPlansFlow() {
    this.noPlansLink().click();
    ConfirmationModal.yesButton().click();
  }

  // Adds categories from an array of categories
  addCategoriesFlow(categories) {
    categories.forEach(category => {
      this.categoryNameInput().type(category);
      this.addCategoryButton().click();
    })
  }

  // Invites users from an array of dicts that contain email and role
  inviteUsersFlow(invites) {
    invites.forEach(invite => {
      this.emailInput().type(invite.email);
      this.roleDropdown().select(invite.role);
      this.inviteButton().click();
    })
  }

  // Sends app links to the array of phone numbers
  sendAppLinksFlow(phoneNumbers) {
    phoneNumbers.forEach(phone => {
      this.phoneInput().type(phone);
      this.textMeALinkButton().click();
    })
  }

  /*
  projectName (string): used as the name of the new project
  addPlans (boolean): adds example plans if 'true'
  categories (array): adds a list of categories if specified
  invites (array of dicts): invites the list of emails with permissions
  to the project if specified e.g. 
  [
    {
      email: "test1@fieldwire.com",
      role: "Admin"
    },
    {
      email: "test2@fieldwire.com",
      role: "Member"
    }
  ]
  phoneNumbers (array): sends invite links to the list of phone numbers
  if specified
  */
  createProjectFlow(
    projectName,
    addPlans=false,
    categories=null,
    invites=null,
    phoneNumbers=null
  ) {
    this.newProjectFlow(projectName);
    if(addPlans == true) {
      this.addPlansFlow();
    }
    this.nextButton().click();
    if(categories != null) {
      this.addCategoriesFlow(categories);
    }
    this.nextButton().click();
    if(invites != null) {
      this.inviteUsersFlow(invites);
    }
    this.nextButton().click();
    if(phoneNumbers != null) {
      this.sendAppLinksFlow(phoneNumbers);
    }
    this.nextButton().click();
  }
}
    
module.exports = new NewProjectModal();
