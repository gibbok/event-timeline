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

## Performance

In order to maintain a good the browser performance an keep the memory consumptions low (number of DOM node) and the payload size (network requests and parsing) I am using a simple pagination tecnique, so a limited amount of records are downloaded and displayed to the user at any specific time; In this application he pagination is peformed by the server commanded by the client using query paramenters.

In case the UX does not allow a "classical" pagination we could evaluate different tecquines:

- Infinite scroll: we could load data when the user scroll or click a button "load more", with this data is loaded incrementally. As the number of nodes in the DOM will increase with the amount of scroll would be necessary to virtualize only the visible DOM nodes, this can be achived using some library as <https://tanstack.com/virtual/v3> this techique is called windowing.

## UX/UI aspects

For this simple application I chosen [MUI](https://mui.com/) for its simplicity and wide range of pre-made UI components.

The main view, contains essential information about the events, with the event status highlighed with some color in order to grab the attention.
It is possible to expans an event to get more information by clicking on the chevron icon on the right side of the an event.
On click user can read more information for instance device and causes.
I kept the design here at bear minimal in order to save some time, so the content is displaying in simple table. In a real application we could defintelly improve the layout.

Pagination is sticky in at the bottom of the screen easily finding and navigation.

The events are ordered in desc order, so the most recent are on top. Could be useful to evaluate some type of filtering for instance.

## Testing

The current used architect allow a clean separation of concern between different types of components.
Simple components, which rappresent all the view are easily testable without any stabbing of network request.
I drafted few tests `EventTimeline.test.tsx` using `Jest` and `React Testing Library`.
Transformation are created as utility function which can be easily unit tested.
Basic functional composition is being as mechanism to combine operation on data.

In a real world application we could consider using [MSW](https://mswjs.io/) to stab network requests for our containers and test with `React Testing Library` our components.

In addition E2E testing could be used, for instance using Cypress.

An additional layer of testing of the UI could be Visual Regression testing, Loki or Happo.io.

As testing strategy we could evaluate the Testing Pyramid.
