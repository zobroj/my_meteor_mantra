## Overview
My Meteor Mantra is a basic [Meteor](https://www.meteor.com) boilerplate based on the [Mantra application architecture](https://github.com/kadirahq/mantra).

## Features
* Follows Mantra framework specific modules approach
* All components composed in React
* Routing with FlowRouter highlights active route in navbar
* User registration, login, and logout with [meteor-auth](https://github.com/remotebase/meteor-auth)
* Email uses SSR and setup to send via Gmail SMTP
* Basic Bootstrap theme installed from NPM

## Email Setup (Gmail)
1. Create a file `/server/configs/private_credentials.js`
2. Add the following code where X = username, and Y = password (Don't forget to add this file to your `.gitignore`)
```javascript
// private_credentials.js
export default function () {
  process.env.MAIL_URL = "smtp://XXXXXX%40gmail.com:YYYYYYY@smtp.gmail.com:465/"
}
```

# Todo
* Add password recovery
* Add admin mode
* Add testing

## Reference
* Inspird by: [Mantra Kickstarter](https://github.com/mantrajs/meteor-mantra-kickstarter)
* Email tutorial: [Meteor Chef](https://themeteorchef.com/snippets/using-the-email-package/#tmc-configuration)

## License
MIT
