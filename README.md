# fieldwire

## Setup
1. [Install Node.js](https://nodejs.org/en/download/)
2. `cd [location/of/this/repo]`
3. `yarn`

## Running Tests

### From the Cypress Runner
1. `yarn cypress:open`
2. Click the "E2E Testing" option
3. Choose your browser
4. Click "Start E2E Testing in [browser]"
5. Click the spec you want to run

### From the Console (runs all tests)
1. `yarn cypress:run`

## Notes
Ideally the users used in these tests would be created through an API or fixtures and deleted after the test.

It would also be good to delete all created data at the end of each test. I'm deleting the created projects inside the tests because it maxes out at three projects with a trial plan.

Another benifit would be to log in through the API so we wouldn't have to go through the log in flow for most tests.