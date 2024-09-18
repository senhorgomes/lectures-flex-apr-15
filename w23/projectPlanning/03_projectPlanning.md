Plans are worthless, but planning is everything. - Dwight D. Eisenhower

How useful is planning for our projects?

Prevents hefty modifications to your database, backend, frontend.

-> Techstack

Postgresql
Express
    - Module -> That helps us interact with the database better
        -> Down the road we learn the package is deprecated, and it doesn't work with our version of PSQL
        -> It also doesn't work with our node version
React

- Make sure you're using the latest version
- Make sure you're teammates are on the same version
- Make sure the software/versions are compatabile with eachother


Scope -> The end goal of my app. What do I want my app to accomplish

Solid vision for your app and half way through you come up with another feature.

Scope creep -> When you're planning/working on app, and you begin to add features that weren't initially planned for launch

Personal project/freelancing



* A simple app - A single Restaurant app

1. List of things we want our app to do - User Stories

- User Stories will help us understand what our tech needs are.

As a user...

MVP -> Minimum Viable Product


<!-- Frontend routes -->
CRUD
Create -> POST
Read -> GET
Update -> POST/PUT
Delete-> DELETE/POST

As a user, I want to be able to view all available items on the menu, along with their prices -> GET -> / or /menu

As a user, I want to be able to place orders for pick-up -> GET/POST -> /order

As a user, I want to be able to place orders for delivery -> Tracking, GPS, Google maps

As a user, I want to be able to favourite combos -> GET -> /menu/specials

As a user, I want to be able to reorder past orders

<!-- You're going to have two routes -->
<!-- Backend routes /api -->

Stretch:
As a user, I want to be able to view the menu in another language
As a user, I want to be able to collect points -> We need to keep a tally of everyones points
We have go into the database, and redo the ERD

Do we want this app to be online or offline?
Do we want this app to be on mobile?
Do we want this app to be available in different languages?

How much time do we have? 

- 3 weeks
- A month?
- A year?


Major features, always establish this first
- What type of app is this for? Mobile? Web? Android or iPhone?
- Online or offline?
- Will we have a community?

Do some research
- Other restaurant apps, what do they offer that we can
- What is something we can improve on
- What is something we can offer that they don't

2. Database/Flow

3. ERD

4. Routes (web app)
    - / - GET -> To view restaurant homepage, top combos, hours of operation
    - /order - GET -> To view your order
    - /order - POST -> Submits order to the backend
    - /menu - GET -> To view all restaurant items

5. Wireframes(Figma, sketch.io, AdobeXD) - reduces decision fatigue -> figure out the placement of components now instead of later, color schemes
    
6. Setup the Project structure(Establish our tech stack), and the naming conventions(Style-Guide)
    
7. Setup Github Repo
8. Workflow and Tasks (Trello, Asana, Jira, Github)
9. Communication (Slack, Email, Discord, etc.)
