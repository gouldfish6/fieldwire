class SignUpPage {
  // First screen
  firstNameInput = () => cy.get('#firstNameInput');
  lastNameInput = () => cy.get('#lastNameInput');
  workEmailInput = () => cy.get('#emailInput');
  passwordInput = () => cy.get('#passwordInput');
  agreementCheckbox = () => cy.get('#explicitAgreement');
  createAccountButton = () => cy.get('[data-e2e="create-account-button"]');
  
  // Second screen
  companyNameInput = () => cy.get('#company');
  companyTypeDropdown = () => cy.get('#companyType');
  tradeDropdown = () => cy.get('#tradeType');
  numberOfEmployeesDropdown = () => cy.get('#companySize');
  phoneInput = () => cy.get('#phone');
  completeButton = () => cy.get('[data-e2e="create-account-complete"]');

  // Enters the data for the new user on the first sign up step
  userSignUpFlow(
    firstName,
    lastName,
    workEmail,
    password
  ) {
    this.firstNameInput().type(firstName);
    this.lastNameInput().type(lastName);
    this.workEmailInput().type(workEmail);
    this.passwordInput().type(password);
    this.agreementCheckbox().click();
    this.createAccountButton().click();
  }

  // Enters the data for the company on the second sign up step
  companySignUpFlow(
    compnayName,
    companyType,
    numberOfEmployees,
    phone,
    trade=null
  ) {
    this.companyNameInput().type(compnayName);
    this.companyTypeDropdown().select(companyType);
    if(companyType == 'Specialty Contractor' && trade != null) {
      this.tradeDropdown().select(trade);
    }
    this.numberOfEmployeesDropdown().select(numberOfEmployees);
    this.phoneInput().type(phone);
    this.completeButton().click();
  }

  // Creates a new user through the sign up flow
  // Options for companyType: Specialty Contractor, General Contractor,
  // Architect / Engineer, Owner / Developer, Other
  // Options for numberOfEmployees: 1 - 10, 10 - 50, 50 - 250, 250 - 1000, 1000+
  // Options for trade: TODO as there are a lot
  signUpFlow(
    firstName,
    lastName,
    workEmail,
    password,
    compnayName,
    companyType,
    numberOfEmployees,
    phone,
    trade=null
  ) {
    this.userSignUpFlow(
      firstName,
      lastName,
      workEmail,
      password
    );

    this.companySignUpFlow(
      compnayName,
      companyType,
      numberOfEmployees,
      phone,
      trade
    );
  }
}

module.exports = new SignUpPage();
