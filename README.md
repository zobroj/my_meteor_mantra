## Overview
My Meteor Mantra is a basic [Meteor](https://www.meteor.com) boilerplate based on the [Mantra application architecture](https://github.com/kadirahq/mantra).

## Features
* Follows Mantra framework specific modules approach
* All components composed in React and react-bootstrap
* Routing with FlowRouter highlights active route in navbar
* User authentication at the component level
* Account email verification and password reset tokens sent via Gmail SMTP
* Basic Bootstrap theme installed from NPM
* Unit tests all around

## Setup
1. Clone or fork the repository
2. Run `npm install` in your console
3. Setup email (optional, but required for account verification)
  1. Create a file '/server/configs/private_credentials.js'. (Don't forget to add this file to your '.gitignore')
  2. Add the following code where X = username, and Y = password (If your credentials get rejected by Google, login to your Gmail account and change settings to 'use less secure apps'.)
  ```javascript
  // private_credentials.js
  export default function () {
    process.env.MAIL_URL = "smtp://XXXXXX%40gmail.com:YYYYYYY@smtp.gmail.com:465/"
  }
  ```

## User Authentication
User authentication is at the component level. For each component that needs access: import { authComposer } into the component's container; and, then add `composeWithTracker(authComposer)` to the `composeAll()` method call.

Tracking the authComposer will add the props: userId, loggedIn, username, profile, email, emailVerified to the component.

There are two different types of containers that you can wrap your components for authentication: "AuthEnsureUser" and "AuthEnsureGuest". Each respectively allows only the type of user to view the wrapped component. Also, each has a default message for unauthorized users, but these can be overridden with props.

Based on [meteor-auth](https://github.com/remotebase/meteor-auth)

## Testing
To run eslint and mocha tests `npm run test` or to only run mocha tests `npm run testonly` in your console.

## Todo
* Add admin mode

## Reference
* Inspired by: [Mantra Kickstarter](https://github.com/mantrajs/meteor-mantra-kickstarter)
* Email verification tutorial: [Meteor Chef](https://themeteorchef.com/snippets/sign-up-with-email-verification/)
* Email tutorial: [Meteor Chef](https://themeteorchef.com/snippets/using-the-email-package/#tmc-configuration)

## License
MIT
