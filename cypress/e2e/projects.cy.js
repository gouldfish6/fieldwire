import Header from '../pages/header';
import LogInPage from '../pages/logInPage';
import NewProjectModal from '../pages/newProjectModal';
import PlansPage from '../pages/plansPage';
import ProjectsPage from '../pages/projectsPage';
import SideBar from '../pages/sideBar';
import { v4 as uuidv4 } from 'uuid';

// Verifies that the project name in the sidebar is correct
function verifyProjectName(projectName) {
  Header.sideBarButton().click();
  SideBar.projectName().should('contain', projectName);
}

describe('projects', () => {

  beforeEach(function () {
    cy.fixture('testData').then((testData) => {
      // Get the test data
      this.testData = testData;
      
      // Logs in and begins to create a new project
      cy.visit('/');
      LogInPage.logInFlow(
        testData.projectUserEmail,
        testData.projectUserPassword
      );
      ProjectsPage.newProjectLink().click();
    })
    
    // Create a unique project name for each test
    cy.wrap('test-' + uuidv4()).as('projectName');
  })

  afterEach(function () {
    // Delete the created project
    // This is useful so I don't have to manually delete project data
    // and I don't have access to the API
    cy.visit('/');
    ProjectsPage.deleteProject(this.projectName);
  })

  it('can be created through the project modal', function () {
    // Create the base project
    NewProjectModal.createProjectFlow(this.projectName);

    // Verify the project was created
    verifyProjectName(this.projectName);
  })

  it('can be created with sample plans', function () {
    // Create the project with sample plans
    NewProjectModal.createProjectFlow(this.projectName, true);

    // Verify the project was created and is displayed with the sample
    // plans
    PlansPage.planName().each((planName, index) => {
      expect(planName.text()).to.eql(this.testData.examplePlans[index]);
    })
    verifyProjectName(this.projectName);
  })
})
