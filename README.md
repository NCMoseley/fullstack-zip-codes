# Fullstack Zip Codes

With Zip Codes, you will always have the ability to find a zip, provided you live in Maryland! This project is intended to showcase some technologies and demonstrate fullstack engineering skills. 

Start time: 2:30pm PST Monday April 11th. 


## Notes

1. I prepared the data ahead of time. I hope this was the correct solution. I did start writing a function to convert the csv in the api when seeding the db, but I decided it was a waste of time. 

## Prisma (Postgres)

https://www.prisma.io/docs/guides/database/seed-database

Seed DB on first startup
```
npx prisma db seed
```

Run GUI for db in browser
```
npx prisma studio
```

## Jest

https://dev.to/maciekgrzybek/setup-next-js-with-typescript-jest-and-react-testing-library-28g5

https://www.prisma.io/docs/guides/testing/unit-testing#example-unit-tests

Note: `"strictNullChecks": true` was necessary as per above docs

## Making A request

You can make a request to the api by using the following command:

```
http://localhost:3000/api/getCityAndCounty?zipCode=20601
```

Where 20601 is a Maryland zip code.