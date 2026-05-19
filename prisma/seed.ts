import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  /*
   * =========================
   * Categories
   * =========================
   */

  await prisma.category.create({
    data: {
      name: "PERSONNAGES",
      visible: true,
      position: 6,
    },
  });

  /*
   * =========================
   * Paintings
   * =========================
   */

  await prisma.painting.createMany({
    data: [
      {
        title: "prince",
        size: "",
        technic: "",
        support: "",
        category: "PERSONNAGES",
        imageUrl: "https://api.gipecrea.fr/images/prince1720166188627.webp",
        isInPreview: false,
        positionInPreview: 3,
      },
      {
        title: "SOURIFLORE",
        size: "30 X 30",
        technic: "HUILE",
        support: "Toile",
        category: "PERSONNAGES",
        imageUrl: "https://api.gipecrea.fr/images/SOURIFLORE1720974529737.jpg",
        isInPreview: false,
      },
      {
        title: "CLOWNY",
        size: "30 X 30",
        technic: "HUILE",
        support: "Toile",
        category: "PERSONNAGES",
        imageUrl:
          "https://api.gipecrea.fr/images/CLOWN_TRISTE1720974625311.jpg",
        isInPreview: false,
      },
      {
        title: '"LE" DAVID',
        size: "60 x 50",
        technic: "HUILE",
        support: "Toile",
        category: "PERSONNAGES",
        imageUrl:
          "https://api.gipecrea.fr/images/IMG_20210723_0958451720974680657.jpg",
        isInPreview: false,
      },
      {
        title: "INKREDIBEUL HULK",
        size: "100 X 80",
        technic: "HUILE",
        support: "Toile",
        category: "PERSONNAGES",
        imageUrl:
          "https://api.gipecrea.fr/images/IMG_20210813_1146481720975184501.jpg",
        isInPreview: false,
        positionInPreview: 3,
      },
      {
        title: "LENNY",
        size: "54 X 80",
        technic: "HUILE",
        support: "Toile",
        category: "PERSONNAGES",
        imageUrl:
          "https://api.gipecrea.fr/images/IMG_20220117_1515551720975836622.jpg",
        isInPreview: false,
      },
      {
        title: "MON VIEUX",
        size: "50 X 50 X 4",
        technic: "HUILE",
        support: "Toile",
        category: "PERSONNAGES",
        imageUrl:
          "https://api.gipecrea.fr/images/IMG_20231207_1724101720975961338.jpg",
        isInPreview: false,
      },
      {
        title: "STAROUILLEE",
        size: "100 X 80",
        technic: "HUILE",
        support: "TOILE",
        category: "PERSONNAGES",
        imageUrl:
          "https://api.gipecrea.fr/images/IMG_20210723_1002511721113490694.jpg",
        isInPreview: false,
      },
      {
        title: "JOKER",
        size: "33 X 41",
        technic: "HUILE",
        support: "CARTON TOILE",
        category: "PERSONNAGES",
        imageUrl:
          "https://api.gipecrea.fr/images/IMG_20210723_1432331721113721261.jpg",
        isInPreview: false,
      },
      {
        title: "MIMINES DE MA P'TITE FILLE",
        size: "46 X 55",
        technic: "HUILE",
        support: "TOILE",
        category: "PERSONNAGES",
        imageUrl:
          "https://api.gipecrea.fr/images/IMG_20210723_1426391721113897084.jpg",
        isInPreview: false,
      },
      {
        title: "ACDC",
        size: "48 X 33",
        technic: "HUILE",
        support: "TOILE",
        category: "PERSONNAGES",
        imageUrl:
          "https://api.gipecrea.fr/images/IMG_20210723_0957481721113938667.jpg",
        isInPreview: false,
      },
      {
        title: "MON FRANGIN (FAN DE CANTONA ET MU)",
        size: "40 x 40 x 4",
        technic: "HUILE",
        support: "TOILE",
        category: "PERSONNAGES",
        imageUrl:
          "https://api.gipecrea.fr/images/IMG_20240204_1811221721114573986.jpg",
        isInPreview: false,
      },
      {
        title: '"les potes"',
        size: "60 X 60 X 4",
        technic: "ACRYLIQUE",
        support: "TOILE 3D",
        category: "PERSONNAGES",
        imageUrl:
          "https://api.gipecrea.fr/images/IMG_20230220_1622031721114671975.jpg",
        isInPreview: false,
      },
      {
        title: "BOB",
        size: "24 X 35",
        technic: "HUILE",
        support: "TOILE",
        category: "PERSONNAGES",
        imageUrl: "https://api.gipecrea.fr/images/BOB1721114877909.jpg",
        isInPreview: false,
      },
      {
        title: "LOVING FRANKY",
        size: "60 X 80",
        technic: "HUILE",
        support: "TOILE",
        category: "PERSONNAGES",
        imageUrl:
          "https://api.gipecrea.fr/images/IMG_20230109_1007371721821641511.jpg",
        isInPreview: false,
      },
      {
        title: "Vieux Sage",
        size: "",
        technic: "HUILE",
        support: "papier dessin noir",
        category: "PERSONNAGES",
        imageUrl:
          "https://api.gipecrea.fr/images/IMG_20210725_0749491721121523392.jpg",
        isInPreview: true,
      },
      {
        title: "JUNGLE QUEEN",
        size: "100 X 80",
        technic: "HUILE",
        support: "TOILE",
        category: "PERSONNAGES",
        imageUrl:
          "https://api.gipecrea.fr/images/jungle_queen1721121582298.jpg",
        isInPreview: false,
      },
      {
        title: "MON BOULANGER ",
        size: "80 X 60",
        technic: "HUILE",
        support: "TOILE",
        category: "PERSONNAGES",
        imageUrl: "https://api.gipecrea.fr/images/boulanger1721121694206.jpg",
        isInPreview: false,
      },
      {
        title: "NTM",
        size: "40 X 30",
        technic: "HUILE",
        support: "TOILE",
        category: "PERSONNAGES",
        imageUrl: "https://api.gipecrea.fr/images/ntm1721121721008.jpg",
        isInPreview: false,
        positionInPreview: 3,
      },
      {
        title: "FEMME STEAMPUNK",
        size: "80X80",
        technic: "ACRYLIQUE",
        support: "Toile 3D",
        category: "PERSONNAGES",
        imageUrl: "https://api.gipecrea.fr/images/femme_metal1751445108042.jpg",
        isInPreview: true,
        positionInPreview: 3,
      },
      {
        title: "MY SONIK",
        size: "80x80",
        technic: "Acrylique",
        support: "Toile 3D",
        category: "PERSONNAGES",
        imageUrl:
          "https://api.gipecrea.fr/images/1de7274c-7353-4ef1-b0d7-53631ab86de8176…",
        isInPreview: true,
      },
      {
        title: "Koi Ma Geule ???",
        size: "80x80",
        technic: "Acrylique ",
        support: "toile 3D (5cm) ",
        category: "PERSONNAGES",
        imageUrl: "",
        isInPreview: false,
      },
      {
        title: "KESKEJVOUSAIR ?",
        size: "80 X 80",
        technic: "Décor acrylique/Personnage huile",
        support: "toile 3D (5cm) ",
        category: "PERSONNAGES",
        imageUrl:
          "https://api.gipecrea.fr/images/serveurblork1773818877131.jpg",
        isInPreview: false,
      },
    ],
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
