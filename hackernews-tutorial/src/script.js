// Import the PrismaClient constructor from the @prisma/client node module.
const { PrismaClient } = require('@prisma/client');
// Instantiate PrismaClient- which will migrate our database schema.
const prisma = new PrismaClient();

// Define an async function called main to send queries to the database. You will write all your queries inside this function.
async function main() {
  const newLink = await prisma.link.create({
    data: {
      description: 'Fullstack tutorial for GraphQL',
      url: 'www.howtographql.com',
    },
  });
  const allLinks = await prisma.link.findMany();
  console.log(allLinks);
}

// Call the main function.
main()
  .catch((e) => {
    throw e;
  })
  // Close the database connections when the script terminates.
  .finally(async () => {
    await prisma.$disconnect();
  });

/* Summary of your workflow
To recap, this is the typical workflow you will follow when updating your data:

Manually adjust your Prisma data model.
Migrate your database using the prisma migrate CLI commands we covered.
(Re-)generate Prisma Client
Use Prisma Client in your application code to access your database.*/
