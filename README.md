# Event Timeline

An Event Timeline mini application based on React, TypeScript and MUI.

## Install instruction

- Clone this repo `git clone https://github.com/gibbok/event-timeline.git`
- Visit the app folder `cd event-timeline`
- Install dependencies, use `nvm use` and after `run npm i`
- Run the project `npm run dev`
- Visit <http://localhost:3000/> (or what ever reported in your cli)
- To run the tests in app folder run `npm t` then press `a`

## Tool overview

- Code is written in `TypeScript` and `ReactJS` to provide type safety.
- The project is built on top of `Next.js`.
- `React Query` has been used for declarative server-state data management together with `Axios` for data fetching.
- `Material UI` is used for UI components, with a fluid layout.
- For testing `jest` and `React Testing Library` were installed to enable writting tests that resemble the way the app is being used. Utility functions were written mainly in TDD style.
- `React Router` is used for routes and handling query strings.

## Architect overview and project structure

In this architecture preposition there is a clear sepration of concern between components which interact with the server, so called here containers, and components which just render the view and handle the interaction with the user, so called simple components.

The container components (for instance `EventTimelineContainer.tsx`) are responsible for any side effects, data fetching, caching and data synchronization and error handling.

The simple components are pure and they have no side effects and no data fecthing capabilities they are only responsible to display data to the user and interaction with the user.

Interaction with the server is handled with a dedicated hook `useGetEvents.ts` situated in the `api` folder. This folder is responsible for the data layer and contains also the BE types defintion.

The hook `useGetEvents.ts` retrives data from the server, store the result in a cache using `React Query` and transfomrs the data from the server into a data structure suitable for the UI.

The `components` folder includes UI components divided per `views` or `commons` reusable components.

The `pages` rolder contains routing entry points based on Next.js.

By using these techniques we can more easily separate concerns and allow quickly testing the majority of our components.
