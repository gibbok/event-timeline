# Event Timeline

Event Timeline is a mini application based on React, TypeScript, and MUI. This document provides installation instructions, an overview of the tool, architectural overview, project structure, performance considerations, UX/UI aspects, and testing strategies.

Running the application hosted on Vercel. You can visit it here:

<https://event-timeline.vercel.app/>

## Installation Instructions

Follow these steps to install the Event Timeline application:

- Clone this repository using `git clone https://github.com/gibbok/event-timeline.git`.
- Navigate to the app folder using `cd event-timeline`.
- Install dependencies using `nvm use` followed by `npm i`.
- Run the project using `npm run dev`.
- Visit <http://localhost:3000/> (or whatever is reported in your CLI).
- To run tests in the app folder, use `npm t` and then press `a`.

## Tool Overview

The following technologies were used in the development of the Event Timeline application:

- `TypeScript` and `ReactJS` were used to provide type safety and build user interfaces.
- The project is built on top of `Next.js` and deployed to `Vercel`.
- `React Query` was used for declarative server-state data management, and `Axios` was used for data fetching.
- `Material UI` was used for UI components, with a fluid layout.
- `Jest` and `React Testing Library` were used for testing.

## Architectural Overview and Project Structure

The Event Timeline application has a clear separation of concern between components that interact with the server (called "containers") and components that only render the view and handle user interaction (called "simple components").

Container components (e.g., EventTimelineContainer.tsx) handle side effects, data fetching, caching, data synchronization, and error handling.

Simple components are pure and have no side effects or data fetching capabilities. They are only responsible for displaying data to the user and interacting with the user.

Interaction with the server is handled with a dedicated hook, `useGetEvents.ts`, located in the `api` folder. This folder is responsible for the data layer and also contains the back-end types definition.

The `components` folder includes UI components divided into `views` or `commons` reusable components.

The `pages` folder contains routing entry points based on `Next.js`.

These techniques allow for the separation of concerns and enable quick testing of the majority of our components.

The project uses immutable data structures, which are used to provide predictability.

## Performance

To maintain good browser performance, keep memory consumption low (number of DOM nodes), and minimize payload size (network requests and parsing), a simple pagination technique is used in the Event Timeline application. A limited amount of records are downloaded and displayed to the user at any given time. Data pagination is performed by the server, commanded by the client using query parameters.

If the UX does not allow for a "classical" pagination, different techniques can be evaluated, such as infinite scrolling, which loads data incrementally when the user scrolls or clicks a "load more" button. As the number of nodes in the DOM increases with the amount of scroll, it is necessary to virtualize only the visible DOM nodes. This can be achieved using a library such as <https://tanstack.com/virtual/v3>. This technique is called windowing.

## UX/UI Aspects

For this simple application, I have chosen `MUI` for its simplicity and wide range of pre-made UI components. The use of Material-UI also provides a consistent and visually pleasing UI.

The main view displays essential information about events, with the status of each event highlighted in a color to draw the user's attention. To access more information, users can click on the chevron icon located on the right side of the event. This will expand the event and reveal additional details, such as the device and causes. In the interest of time, I kept the design minimal and omitted some content, resulting in a simple table display. However, in a real-world application, we could certainly improve the layout and display more relevant information.

Pagination is sticky at the bottom of the screen, making it easy to find and navigate.

The events are ordered in descending order at the server-side, which avoids the need for the client to perform sorting and ensures that the most recent events are displayed at the top. While this provides a convenient overview of recent activity, it may be useful to consider implementing some type of filtering. For example, users could filter events by type or time range, allowing them to focus on specific information and improve the relevance of the displayed data.

## Testing

The current architecture allows for a clean separation of concerns between different types of components. Simple components, which represent all the views, are easily testable without any network requests. I have created a few tests, `EventTimeline.test.tsx`, using Jest and `React Testing Library`. Transformations are created as utility functions, which can be easily unit tested.
I used a TDD (Test Driven Development) approach for writing utility functions.

In a real-world application, we could consider using MSW to mock network requests for our containers and test our components with React Testing Library.

In addition, E2E testing could be used, for instance, using Cypress.

An additional layer of testing for the UI could be Visual Regression Testing, Loki, or Happo.io.

As a testing strategy, we could evaluate the Testing Pyramid.

## Video

https://user-images.githubusercontent.com/17195702/227739915-af1446d5-190c-42ba-8109-08e036024033.mov

## Screenshots

![Screenshot 2023-03-25 at 9 17 49 PM](https://user-images.githubusercontent.com/17195702/227739615-bc2e608a-5e2f-4454-94d1-73eee9f4c85c.png)

![Screenshot 2023-03-25 at 9 18 15 PM](https://user-images.githubusercontent.com/17195702/227739618-043cff0a-69cc-42fb-9363-4c69da1fe91a.png)
