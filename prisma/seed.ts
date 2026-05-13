import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  /*
   * =========================
   * Categories
   * =========================
   */

  await prisma.category.createMany({
    data: [
      {
        name: "PERSONNAGES",
        visible: true,
        position: 1,
      },
      {
        name: "Cartoons",
        visible: true,
        position: 2,
      },
      {
        name: "Caricatures",
        visible: true,
        position: 3,
      },
      {
        name: "EXPO et IN SITU",
        visible: true,
        position: 4,
      },
      {
        name: "ZE ARTIST",
        visible: true,
        position: 5,
      },
    ],
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
        title: "Taz Vénère",
        size: "80 X 80 X 4",
        technic: "Huile",
        support: "Toile 3D",
        category: "Cartoons",
        imageUrl:
          "https://api.gipecrea.fr/images/IMG_20221122_1820401720968135570.jpg",
        isInPreview: false,
        positionInPreview: 3,
      },

      {
        title: "KEKE DE LA PLAYA",
        size: "60X40",
        technic: "PEINTURE A L'HUILE, Fond noir",
        support: 'PAPIER, créé juste "pour de rire"',
        category: "Caricatures",
        imageUrl: "https://api.gipecrea.fr/images/ALAPLGE1720368692489.jpg",
        isInPreview: false,
      },

      {
        title: "DUCKY mène l'enquête",
        size: "40 X 38",
        technic: "HUILE ET COLLAGE",
        support: "Toile",
        category: "Cartoons",
        imageUrl:
          "https://api.gipecrea.fr/images/IMG_20230804_1214591720967839667.jpg",
        isInPreview: false,
      },

      {
        title: "En intérieur3",
        size: "",
        technic: "",
        support: "",
        category: "EXPO et IN SITU",
        imageUrl: "https://api.gipecrea.fr/images/maison31721198966572.jpg",
        isInPreview: false,
      },

      {
        title: "MOI1",
        size: "",
        technic: "",
        support: "photo",
        category: "ZE ARTIST",
        imageUrl:
          "https://api.gipecrea.fr/images/FB_IMG_16824401524361721207579981.jpg",
        isInPreview: false,
        positionInPreview: 3,
      },

      {
        title: "MOI2",
        size: "",
        technic: "",
        support: "photo",
        category: "ZE ARTIST",
        imageUrl:
          "https://api.gipecrea.fr/images/IMG_20200415_115144_-_Copie172120761108.jpg",
        isInPreview: false,
        positionInPreview: 3,
      },

      {
        title: "MOI3",
        size: "",
        technic: "",
        support: "photo",
        category: "ZE ARTIST",
        imageUrl:
          "https://api.gipecrea.fr/images/IMG_20221129_074821_-_Copie172120763263.jpg",
        isInPreview: false,
      },

      {
        title: "MOI4",
        size: "",
        technic: "",
        support: "photo",
        category: "ZE ARTIST",
        imageUrl:
          "https://api.gipecrea.fr/images/IMG_20230423_2002541721208108697.jpg",
        isInPreview: false,
      },

      {
        title: "MOI5",
        size: "",
        technic: "",
        support: "photo",
        category: "ZE ARTIST",
        imageUrl:
          "https://api.gipecrea.fr/images/IMG_20230924_1750291721208027972.jpg",
        isInPreview: false,
      },

      {
        title: "MOI7",
        size: "",
        technic: "",
        support: "photo",
        category: "ZE ARTIST",
        imageUrl:
          "https://api.gipecrea.fr/images/received_5324165589179941721208203739.jpg",
        isInPreview: false,
      },

      {
        title: "MOI8",
        size: "",
        technic: "",
        support: "photo",
        category: "ZE ARTIST",
        imageUrl:
          "https://api.gipecrea.fr/images/received_8282830187204351721208229074.jpg",
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
