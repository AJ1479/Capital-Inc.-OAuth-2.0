
# Capital-Inc.-OAuth 2.0

A configurable OAuth 2.0 server for Capital-Inc.


## Features

- MySQL integration through `sequelize`.
- Signup and Password reset email alerts through `sendgrid`.
- Configurable `OAuth 2.0` server.
- Access and Refresh Tokens.
- Password hashing and salting.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


`JWT_SECRET_FOR_ACCESS_TOKEN`

`JWT_SECRET_FOR_REFRESH_TOKEN`

`JWT_ACCESS_TOKEN_EXPIRY_SECONDS`

`JWT_REFRESH_TOKEN_EXPIRY_SECONDS`

`PORT`

## Deployment

To deploy this project, first install packages using 

```bash
  npm i
```

Then, start the server with 

```bash
  node server.js
```

