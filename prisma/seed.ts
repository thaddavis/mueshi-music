import { prisma } from "../prisma";

async function main() {
  const genres = [
    "blues",
    "classical",
    "country",
    "electronic",
    "folk",
    "hip-hop",
    "jazz",
    "latin",
    "pop",
    "reggae",
    "rock",
    "metal",
    "punk",
    "soul",
  ];

  for (const genre of genres) {
    await prisma.genre.upsert({
      where: { name: genre },
      update: {},
      create: {
        name: genre,
      },
    });
  }

  // --- --- --- ---

  const interests = [
    "alto",
    "tenor",
    "soprano",
    "baritone",
    "bassist",
    "guitarist",
    "keyboard",
    "drummer",
    "trumpet",
    "saxophone",
  ];

  for (const interest of interests) {
    await prisma.interest.upsert({
      where: { name: interest },
      update: {},
      create: {
        name: interest,
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
