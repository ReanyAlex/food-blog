# American Cooks Chinese

A Food Blog utlizing the MERN stack. 
Styled-Components, Passport Google Oauth Strategy

## Getting Started

To get started clone the github repositories to your local machine.

### Installing

In ~/config create a new file called dev.js. Inside that file create a module to export with the following keys: 
googleClientID, googleClientSecret, ID, mongoURI, cookieKey, redirectDomain

```
module.exports = {
  googleClientID:'------------------',
  googleClientSecret: ''------------------',
  //only works in developement enviroment
  ID: 'admin'
  mongoURI: '------------------',
  cookieKey: 'Which ever random string you like'
  redirectDomain: 'http://localhost:3000'
};
```

You will neeed to create a new Mongo DB connection I suggest using https://mlab.com. 
Once you have created a new database you will need to update dev.js mongoURI key

```
mongoURI: 'mongodb://<username>:<password>@ds745843.mlab.com:45732/dbName'
```

You will neeed to setup a Google OAuth for the cloned repo. Go to https://console.developers.google.com/apis/credentials 
Once you have gone through the set up update both googleClientID and googleClientSecret in dev.js

```
googleClientID:
    '1234567890-xxx1xxxx1xxx1xxx11xxxxx.apps.googleusercontent.com',
  googleClientSecret: 'X1xx1X111Xxx1',
```

Next create a new files in ~/client .env.developement and add REACT_APP_ID_KEY=admin

```
REACT_APP_ID_KEY=admin
```

This should allow you to have a working application on your local machine that always has Admin privileges

## Deployment

To deploy you'll need to go through the same process as before but with 
an extra step of adding enviromental variables to heroku

In ~/config create a new file called dev.js. Inside that file create a module to export with the following keys: 
googleClientID, googleClientSecret, ID, mongoURI, cookieKey, redirectDomain

```
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  ID: process.env.GOOGLE_ID,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN
};
```

REDIRECT_DOMAIN is now your heroku web domain

For Admin privilages on a deployed site you will have to contact me.

