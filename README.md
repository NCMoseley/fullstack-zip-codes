# Fullstack Zip Codes

With Zip Codes, you will always have the ability to find a zip, provided you live in Maryland! This project is intended to showcase some technologies and demonstrate fullstack engineering skills. 

Start time: 2:30pm PST Monday April 11th.
End time: 5:36pm PST Monday April 11th. 


## Installation

Run:

```
yarn
```

Then configure Prisma so you can access the UI in the browser, and to seed your database.

```
npx prisma generate
```

```
npx prisma db seed
```

```
npx prisma studio
```

You will need a .env file with the following variables: (I'll provide a link to my URI in the email I send for the team reviewing this)

```
DB_URL=
```
You can create a basic Heroku Postgres DB and copy the `URI` from the Heroku dashboard. 

`https://dev.to/prisma/how-to-setup-a-free-postgresql-database-on-heroku-1dc1`


then finally: 
```
npm run dev
```

## Making a request

You can make a request to the api by using the following command:

```
http://localhost:3000/api/getCityAndCounty?zipCode=20601
```

where 20601 is a Maryland zip code.

Alternatively, you can navigate to localhost:3000 and use the UI. 

## Prisma (Postgres)

`https://www.prisma.io/docs/guides/database/seed-database`

Seed DB on first startup
```
npx prisma db seed
```

Run GUI for db in browser
```
npx prisma studio
```

## Jest

`https://dev.to/maciekgrzybek/setup-next-js-with-typescript-jest-and-react-testing-library-28g5`

`https://www.prisma.io/docs/guides/testing/unit-testing#example-unit-tests`

Note: `"strictNullChecks": true` was necessary as per above docs

Run tests:

```
yarn jest
```

