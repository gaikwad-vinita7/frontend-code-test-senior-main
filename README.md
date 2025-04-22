<img src="https://static.octopuscdn.com/constantine/constantine.svg" alt="Octopus Energy mascot, Constantine" width="100" />

## Getting started

First you'll need to install your dependencies. I have used npm

```sh
cd client && npm install
```

## Start the app

```sh
npm run dev
```

This will do two things:

- Start a Next.js app running in development on <http://localhost:3000>
- Start a graphQL stub server running on <http://localhost:3001/graphql>

## Running tests

You can run tests from the client directory.

```sh
cd client && npm run test
```

## Candidate's notes

1. Approach: Decided to get basic components ready such as header, footer and productList page
2. Added an extra dummy product to showcase the product change on click of a product from Product list to Product details page
3. I have used styled components as I personally like it and also it was a part of the skills section in the job description
4. I have used zustand for state management as I find it convenient as compared to redux tool kit etc. But I have experience of using Redux as well
5. I have made sure to add accessibility features wherever possible as I know how important it is in customer facing applications
6. I have made sure that existing unit tests are running and have added a bit more tests as well for product-list and product-specs components as well.
7. I have used AI a little bit when I had come across some issues on state management.

## if given extra time

1. I would be working on more unit tests
2. Adding storybook to test components in isolation
3. Deploying project on Vercel.
4. Finishing UI to match the provided design
