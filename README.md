# Fullstack Zip Codes

With Zip Codes, you will always have the ability to find a zip, provided you live in Maryland! This project is intended to showcase some technologies and demonstrate fullstack engineering skills. 

Start time: 2:30pm PST Monday April 11th. 


## Installation

Run:

```
yarn install
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




## Making A request

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

```
Yarn Jest
```

## Notes

1. I prepared the data ahead of time. I hope this was the correct solution. I did start writing a function to convert the csv in the api when seeding the db, but I decided it was a waste of time. 

2. You can see I decided to use a full stack boilerplate, as I have been working with Prisma all winter, and I am quite familiar with it. I considered using GraphQl, but I didn't want to stress myself out too badly. If I had more time, I feel I wold have been able to provide that as a deliverable.

3. None of the projects I have contributed on to date use docker containers. I've done some work with the dev ops at Simply Benefits and configured our deployment pipelines, which use docker, but I wasn't comfortable using a docker setup today. I look forward to becoming more comfortable with docker in the near future.

4. You can see there was no investment in CSS or the design on client side, I am much more confident with the client, and would be willing to showcase those skills if parties are interested. I feel it was an aside to this project.