const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const targetList = [
  {
    name: "Randy Marsh",
    x: 29,
    y: 84
  },
  {
    name: "Butters",
    x: 78,
    y: 301
  },
  {
    name: "PC Principle",
    x: 112,
    y: 58
  },
  {
    name: "Timmy",
    x: 177,
    y: 248
  },
  {
    name: "Mr Mkay",
    x: 309,
    y: 120
  },
  {
    name: "Cartman",
    x: 328,
    y: 342
  },
  {
    name: "Tolkien",
    x: 469,
    y: 323
  },
  {
    name: "Wendy",
    x: 590,
    y: 344
  },
  {
    name: "Jimbo",
    x: 584,
    y: 135
  },
];

const userList = [
  {
    name: "Waldo",
    time: 129.222
  },
  {
    name: "Wenda",
    time: 69.114
  },
  {
    name: "Wally",
    time: 69.114
  },
  {
    name: "Peter",
    time: 40.000
  },
  {
    name: "Scooby",
    time: 130.000
  }
];

async function main() {
  console.log("Starting Population...")
  await prisma.user.deleteMany();
  await prisma.target.deleteMany();

  console.log("Adding targets...");
  const targets = await prisma.target.createMany({
    data: targetList
  });
  console.log("Targets added!");
  console.log(targets);

  console.log("Adding user...");
  const users = await prisma.user.createMany({
    data: userList
  });
  console.log("Users added!");
  console.log(users);

  console.log("Done!");
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

