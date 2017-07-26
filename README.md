Link to app: https://bradleyden.github.io/gamebase-front-end/
Link to API Repo: https://github.com/bradleyden/gamebase-api

Demo sign in:

email: demo@email.com

password: a

Objective:

To create a single page web app that allows users to track their gaming history by storing games to their personal library and adding playthroughs to each game. Includes custom front-end UI that communicates with a custom back-end api to handle data storage.

Technologies Used:

HTML, CSS, JavaScript, Handlebars, Bootstrap, AJAX, Ruby, Rails, SQL

Wireframes:

http://imgur.com/mpHPj4D

ERD:

http://imgur.com/rIIA2if

User Stories:

As a new user, I want to be able to quickly see and understand what the site offers as soon as I arrive on the homepage so I can know whether I want to sign up.

As a new user, I want to be able to quickly and easily make a new account once I've decided that I want to use the service.

As a returning user, I want to be able to see the most relevant information from my account upon logging in, including most recent games played.

As a frequent user, I want to be able to quickly update information without needing to jump through a bunch of menus and forms.

Process:

I began by building the basic API structure by generating a scaffold for my Games resource. I worked exclusively in the console to build and test a working one-to-many relationship between games and users using SQL and curl. Once I had that relationship working on the back-end, I built a basic front-end with basic user login forms and forms for creating, reading, updating, and destroying games. I was then able to connect my API to the front-end page to test all my actions again using AJAX requests from the browser rather than curl.

Once I had this working, I was on good pace to have an MVP finished a few days early, so I went back to my API to build the second resource, Playthroughs, which is a join table between users and games. I repeated a similar process of scaffolding, testing in curl,
and then testing in AJAX through the browser.

Once I had both of my relationships working correctly, I built a table to house my data and inserted it using Handlebars. I then used the DataTables plugin (https://datatables.net/) to expand the functionality of the basic HTML table and make it easier to sort and filter data.

Finally, I spend a couple days on bug fixes and styling in CSS and deployed GameBase v.1.0.

What's Next:

I would love to take some time to implement some more advanced data visualization using React.js, such as visual progress bars for playthrough completion, etc. I would also like to implement a social aspect to the app where a user can search for other users and view their games and playthrough data, as well as sharing custom urls to their own profile pages.
