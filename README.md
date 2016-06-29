## Overview
My Meteor Mantra is a basic [Meteor](https://www.meteor.com) boilerplate based on the [Mantra application architecture](https://github.com/kadirahq/mantra).

## Features
* Follows Mantra framework specific modules approach
* All components composed in React
* Routing with FlowRouter highlights active route in navbar
* User registration, login, and logout with [meteor-auth](https://github.com/remotebase/meteor-auth)
* Email uses SSR and setup to send via Gmail SMTP
* Basic Bootstrap theme installed from NPM

## Setup
1. Clone or fork the repository
2. Run `npm install` in your console
3. Setup email (optional)
  1. Comment out the respective lines in '/server/main.js' and '/client/modules/core/actions/accounts.js'
  2. Create a file '/server/configs/private_credentials.js'. (Don't forget to add this file to your '.gitignore')
  3. Add the following code where X = username, and Y = password
  ```javascript
  // private_credentials.js
  export default function () {
    process.env.MAIL_URL = "smtp://XXXXXX%40gmail.com:YYYYYYY@smtp.gmail.com:465/"
  }
  ```
  (If your credentials get rejected by Google, login to your Gmail account and change settings to 'use less secure apps'.)

## Todo
* Add password recovery
* Add admin mode
* Add testing

## Reference
* Inspired by: [Mantra Kickstarter](https://github.com/mantrajs/meteor-mantra-kickstarter)
* Email tutorial: [Meteor Chef](https://themeteorchef.com/snippets/using-the-email-package/#tmc-configuration)

## License
MIT
