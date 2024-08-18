# Photo Tagging App

This app demonstrates photo tagging functionality, implemented as the game "Where is Waldo?"

## How to use
Time starts running as soon as the website loads. Click on a character on the picture, then a dropdown menu will appear with the names of all the relevant characters in the picture. Select the character you want to tag. If your selection is within 50px of the character, the character will be tagged, which is indicated by the selection box turning green.

## Technologies
The game logic is entirely in the backend. It serves a normal HTML on request and JSON via API.

### Frontend
- Pug for templating
- Only self-made CSS and JS, no 3rd party libraries

### Backend
- Node.js
- Express.js
- Just standard middleware (see package.json)

### Database
- Prisma
- PostgreSQL

### Deployed Project

https://delightful-nervous-butternut.glitch.me/