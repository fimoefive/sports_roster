
- [Steps to deploy](https://github.com/nss-nightclass-projects/REACT-Deployment-Netlify)

## LINKS

### [Netlify](https://mjs-sports-roaster.netlify.app)

### [LOOM](https://www.loom.com/share/6260a8b73c5f49f593d87a6837e67263)

### Project Screenshots
![Basketball Roaster Home](https://user-images.githubusercontent.com/58958998/120895517-e6c6c880-c5e2-11eb-8506-0d6aa6bdb991.png)
<img width="1680" alt="Basketball Player Cards" src="https://user-images.githubusercontent.com/58958998/120895521-ecbca980-c5e2-11eb-8b9d-bd9abdd9e011.png">
<img width="1312" alt="Player Form" src="https://user-images.githubusercontent.com/58958998/120895536-0100a680-c5e3-11eb-98ae-17f1276216d7.png">

# Sports Roster
For this project you will be building a team roster for a sports team.  Pick any sport you want (but ~hockey~ American Football is clearly the best choice).  Theme your project based on the sport.

## Requirements
Here is the ERD for this project:

![ERD](./images/react_roster_erd.png)

Here are the user stories that need to be completed:
### Authentication
* As a user, who is logged out, I should only be able to see the authentication screen

* As a user who is logged out, I would like to be able to authenticate by clicking on a button.

* As a user who is logged out, I would like to be able to click on an authentication button and login via google.

* As a user who is logged in, I should not be able to see the authentication button.

* As a user who is logged in, I should be able to see the Team component.

### CREATE Players
* As an authenticated user, I should be able to click a button that displays a form to add a new player.

* As an authenticated user, when I fill out the form and submit a new Player should be created in firebase and should now show in my Team component.

### READ Players
* As an authenticated user, I should be able to see the Team component with all the players I have created.

* As an authenticated user I should not be able to see players that were created by another user.

### UPDATE Players
* As an authenticated user, I should be able to see an edit button on each player card.

* As an authenticated user, when I click the edit button I should see a form with the player information for that user pre-populated.

* As an authenticated user, I should be able to edit the information in the form and hit the submit button.

* As an authenticated user, when I submit the edit form firebase should be updated (PUT request) and the Team component should update

### DELETE Players
* As an authenticated user, I should see a delete button on each player.

* As an authenticated user, when I click a delete button that player should be removed from firebase and the Team component should update.
