import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.intro.create({
    data: {
      url: "http://api.gipecrea.fr/images/speedy1720172097652.webp",
      title: "BIENVENUE CHEZ MOI",
      p1: "Venez partager et échanger autour de mes créations. tournées vers le plaisir et l'envie de faire sourire, colorées, elles sont réalisées à l'huile, ou, de plus en plus souvent, à l'acrylique.",
      p2: "A la demande ou spontanément créées, toutes sont susceptibles de terminer dans votre salon, la chambre de votre enfant, ou d'être offertes à un proche. La touche colorée de ces toiles apporte un réel cachet à tout type d'intérieur.",
      p3: "Contactez-moi, n'hésitez pas on en discutera plus précisément. Et maintenant, place au plaisir...",
      span: "suivez-moi sur FB ou Instagram",
    },
  });

  await prisma.favorite.create({
    data: {
      image: "https://api.gipecrea.fr/images/chat_metal1751444226930.jpg",
      text: "ChatSteampunk",
    },
  });

  await prisma.about.create({
    data: {
      image: "https://api.gipecrea.fr/images/DUNKY1721122257839.jpg",
      title: "UN MAL POUR UN BIEN...",
      p1: "Pendant cette période si particulière qu'aura été le confinement, comme beaucoup d'entre nous, ma vie a changé. Plutôt que de subir ce cloisonnement forcé j'ai pu découvrir un plaisir nouveau, avoir du temps.",
      p2: "Et ce temps m'aura permis de m'essayer à ce qui est devenu assez rapidement une passion : LA PEINTURE ! D'abord à l'huile, puis à l'acrylique, je ne sais plus aujourd'hui quel medium est devenu mon préféré. pourquoi devoir choisir d'ailleurs ?",
      p3: "Et c'est ainsi que mon cerveau, mon imaginaire, se sont réouverts, réveillés. J'avais oublié, pris par la tourmente du monde du travail et les contraintes de la vie, combien il était bon de laisser ses idées vagabonder, s'exprimer. mon âme d'enfant, mes rêves, sont revenus farpper à ma porte. Trouvant écho auprès d'un public que je ne soupçonnais pas si large je me suis épanoui au partage du plaisir, enrichi aux sourires générés, j'ai pris plaisir à échanger avec passion. Venez vous joindre à moi dans cet univers, vos idées, vos avis, y sont les bienvenus. Sourions ensemble",
    },
  });

  await prisma.contact.create({
    data: {
      mainUrl:
        "https://api.gipecrea.fr/images/IMG202310041826391720368027525.jpg",
      si1Url:
        "https://api.gipecrea.fr/images/IMG_20210723_0957481720368027557.jpg",
      si2Url: "https://api.gipecrea.fr/images/1720368027559.jpg",
      si3Url:
        "https://api.gipecrea.fr/images/IMG_20221129_074821_-_Copie1720368027606.jpg",
      t1: "Ça vous a fait envie ? contactez-moi, je ne mords pas",
      t2: "Mais aussi sur les pages jaunes dans “artiste peintre/Roanne”",
      t3: "toutes vos critiques sont les bienvenues, même si je préfère les bonnes, je l'avoue",
      email: "legips42@gmail.com",
    },
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
