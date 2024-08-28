### To Do
- [x] Tools for testing React
- [x] Add Features/Tests to our App -> TDD - Test driven development
- [x] `debug()` and `prettyDOM()`
- [x] Mocking AJAX Requests and Functions
- [x] Coverage Reports

Why do we create tests?

We want to make sure our code is bulletproof. We don't want our code to break the app.

TDD -> Test Driven Development

Edge Cases

Create a form that handles a user registration
The form accepts a first name, last name, email, and password

Happy Path

- User successfully submits the form, and we are able to retrieve the data in the backend

Sad Path (some things that can break)

- What happens if a user submits the form with no first name, no last name?
- What happens if a user enters a phone number into the email field?



You can a whole career around JUST making tests

# Unit Test -> It will only affect one function
- Create a way for the AI to make a selection -> Helper function
# Integration Test ->Testing pieces of the app together Clicking on the robot head will toggle the cheating boolean. It affects the AI selection
- Create a way for the AI to Cheat
# Mock -> Test fetching highscores (mock axios)
- Create a way for us to retrieve highscore

- What does testing help us with?
    - Know if something is working given specific inputs
    - Ensure functionality works as expected

- TODO list
 - Created a function that allows the AI to make a selection
 <!-- Integration testing -->
 - Create a cheat mode for the AI
    - We can click on the AI icon, and activate a cheat mode for it
    - It'll always select the winning choice