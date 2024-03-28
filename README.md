# Hotel Room Reservation System UI

It's presentational prepared as a proof of skills in React.js.

## Development
To use this project you need Node.js (v.20+) and npm.

### Run dev-mode
- Fetch and extract this repository
- Go to this repository catalog
- Run `npm install` - npm will get all needed dependencies
- Run `npm run dev` - vite will launch project - you can see in the terminal which port will display this app

### Tech stack
This project use the following technologies:
- TypeScript - as main language
- Vite - as a build tool
- React - as framework 
- Tailwind.css - as css framework
- Sass - as css preprocessor for custom styles
- FontAwesome - as an icon library
- Redux - will be added to handle communication with backend and providing data to components
- RxJs - will be added to consume data from redux

### Project structure
In order to keep project structure clear we have adopted the following convention:
- /assets - static files: images, fonts, etc.
- /components - components for general purpose
- /layout - components with app skeleton
- /models - shared models, interfaces and enums
- /pages - components representing pages 

Each component will be stored in separate folder which will consists of all related files.