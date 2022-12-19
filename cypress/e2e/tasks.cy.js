import LogInPage from '../pages/logInPage';
import TaskModal from '../pages/taskModal';
import TaskPage from '../pages/taskPage';
import { v4 as uuidv4 } from 'uuid';

/*
There are a ton of fields when creating a task and I'm going to ignore
most of them because of the time suggestion.
*/

describe('tasks', () => {

  beforeEach(function () {
    // Get the test data
    cy.fixture('testData').then((testData) => {
      this.testData = testData

      // Go to the task page
      // Using a hardcoded URL for now
      cy.visit('/#!/projects/4e445313-4562-4942-ad59-36d9f64c4306/tasks');
      LogInPage.logInFlow(
        testData.taskUserEmail,
        testData.taskUserPassword
      );
    })
  })

  it('can be created with a title', function () {
    // Create the unique title
    let title = uuidv4();

    // Create a task with a title
    TaskPage.newTaskButton().click();
    TaskModal.updateTitle(title);
    TaskModal.closeButton().click();

    // Verify the task was added to the end of the task list
    // This is the lazy way of verifying this and it would be better to
    // verify that this task is added to the end of the priority's column
    TaskPage.taskTitle().last().should('contain.text', title);
  })
})
