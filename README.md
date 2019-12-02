<<<<<<< HEAD
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
=======
# MMF
A customized app that will improve the management of my husband's finances

This app is still "in progress".

All rights reserved ©2019 manage-my-finances.net.   
All photos included within this app are available for reuse.

All rights reserved ©2019 jennieCreation.

Content (within quotations defining what each dependency has to offer my app) explaining the dependencies added via Spring Initializer 
was cited directly from their website:  https://start.spring.io/.

**This app incorporates many features:**

**React.js (frontend)** was created via windows terminal via npm create-react-app. It was then opened in Visual Studio Code. It came with several "dependencies", plus I have added some additional ones. More than likely, additional ones might be added along the way during the creation of this app. Here are just a few:
1) axios
2) express
3) formik
4) modules
5) moment
6) node
7) react
8) react-currency-format
9) react-dom
10) react-router-dom
11) react-scripts
12) react-scroll

For "scripts", I had modified the "start" to be "set PORT=4200 && react-scripts start".
This app also utilizes eslingConfig, and uses browser Chrome (primarily) for output of PORT=4200.

**The frontend makes use of the following:**
1) JSON
2) Bootstrap 4.1.0
3) Created-by-me api's to handle the account data services.
4) various methods & hooks
5 Authentication for the login, where other tabs besides 'login' are not available.  Even if someone were to know what the url for a certain tab, they would be directed to the login.
6) HOAs (aka 'higher order components) such as: BrowserRouter(as Router), Route, Switch, Component, AuthenticatedRoute, CurrencyFormat, Redirect, Formik, Form, Field, ErrorMessage, App, AccountApp,and Link.
7) The title of the app, which appears once the app has been launched, was entered into the index.html within the public folder.

**The backend makes use of the following (those that are not listed within the dependencies added during app creation):**

a) various annotations

b) JWT(aka JSON web token; resource for assistance: https://jwt.io/) to secure access to RESTLET CLIENT. This began by adding this dependency within the pox.xml file:
            
                <dependency>
                      <groupId>org.springframework.boot</groupId>
                      <artifactId>spring-boot-starter-security</artifactId>
                    </dependency>
 
This dependency generates a login once a user types in any url that relates to this app. Without the username & password to access localhost:8080 for this app's-related content, no one can actually access any of this app's content. This is also known as 'form-based authentication' by Spring security.

c) JPA

d) Hibernate

e) Spring Boot

Java (backend) was initialized via Spring Initializer with Spring Boot snapshot. Metadata: group(package) is com.jennieCreation.manage_my_finances; the artifact(class name) is manage_my_finances. The dependencies added were:

1) Spring Web Starter. . .the description of which states, "Build web, including RESTful, applications using Spring MVC. Uses Apache Tomcat as the default embedded container".

2) Spring Boot DevTools. . .the description of which states, "Provides fast application restarts, LiveReload, and configurations for enhanced development experience".

3) Spring Data JPA. . .the description of which states, "Persist data in SQL stores with Java Persistence API using Spring Data and Hibernate".

4) H2 Database. . .the description of which states, "Provides a fast in-memory database that supports JDBC API and R2DBC access, with a small (2mb) footprint. Supports embedded and server modes, as well as browser-based console application".

Once created, it was then imported into Eclipse IDE.

This app reads/writes to a H2 database--one that is SQL-based.

>>>>>>> f65f4d0a8a3f69ef9d0152135d8319cbe0eac719
