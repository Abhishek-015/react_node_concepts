# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Testing library doc

You can learn more in (https://github.com/testing-library/jest-dom).

## What to test? ---> There are no specific rules but there are some guidelines to follow:

test component renders
test component renders with prop
test component render in  different states
test component reacts to events

## What not to test?

Implementation details
Third party code eg: MUI components as it is already well tested
code that is not imp from user point of view

## RTL queries:

Every test we write generally involves the following basic steps

1.Render the component
2.Find an element rendered by the component
3.Assert aginst the element found in step 2 which will pass or fail the test  

To render the component we use render method from RTL
 For assertion , we use  expect passing in a  value  and combine it with  a matcher function from jest  or jest-dom 

Queries are the methods that Testing library provide sto find the elemnt on the page

To find the single element on the page, we have

1.getBy..
2.queryBy..
3.findBy..

To find multiple, we have

1.getAllBy..
2.queryAllBy..
3.findAllBy..


