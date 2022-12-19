import Header from '../pages/header';
import LogInPage from '../pages/logInPage';
import ProfileModal from '../pages/profileModal';
import SignUpPage from '../pages/signUpPage';
import { v4 as uuidv4 } from 'uuid';

/*
Ideally we would delete the created user at the end of these tests.
*/

// Verify the account was created and the correct one logged in
function VerifyNewUser(email) {
  Header.profileMenuLink().click();
  Header.profileSettingsLink().click();
  ProfileModal.emailInput().should('have.value', email);
}

describe('sign up', () => {

  beforeEach(function () {    
    // Create a unique email for each test
    cy.wrap('test-' + uuidv4() + '@gmail.com').as('testEmail');
    
    // Go to the sign up page
    cy.visit('/');
    LogInPage.signUpLink().click();
  })

  it('succeeds and logs the user in', function () {
    SignUpPage.signUpFlow(
      'Testfirst',
      'Testlast',
      this.testEmail,
      'password',
      'Test Company',
      'Specialty Contractor',
      '1 - 10',
      '8552224959',
      'HVAC'
    );

    VerifyNewUser(this.testEmail);
  })

  it('succeeds without a trade if not a Specialty Contractor', function () {
    SignUpPage.signUpFlow(
      'Testfirst',
      'Testlast',
      this.testEmail,
      'password',
      'Test Company',
      'General Contractor',
      '1 - 10',
      '8552224959',
    );

    VerifyNewUser(this.testEmail);
  })
})
