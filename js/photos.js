// NO USAR EL MISMO TITLE PARA DOS FOTOS DISTINTAS

const photos = [
  {
    src: {
      small: "/images/fotos_small/0001_small.jpg",
      medium: "/images/fotos_medium/0001_medium.jpg",
      large: "/images/fotos_large/0001_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs"],
    title: "Señora en el Central Park",
    slug: "0001",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0002_small.jpg",
      medium: "/images/fotos_medium/0002_medium.jpg",
      large: "/images/fotos_large/0002_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "fucsia", "compania"],
    title: "Dos señoras en el Central Park",
    slug: "0002",
    home_orientation: "landscape",
  },

  {
    src: {
      small: "/images/fotos_small/0003_small.jpg",
      medium: "/images/fotos_medium/0003_medium.jpg",
      large: "/images/fotos_large/0003_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs"],
    title: "Señor con campera sin manos",
    slug: "0003",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0004_small.jpg",
      medium: "/images/fotos_medium/0004_medium.jpg",
      large: "/images/fotos_large/0004_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "fucsia"],
    title: "Señora con bolsos y vestido fucsia",
    slug: "0004",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0005_small.jpg",
      medium: "/images/fotos_medium/0005_medium.jpg",
      large: "/images/fotos_large/0005_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "balnearias", "compania"],
    title: "Dos señoras en reposeras verdes",
    slug: "0005",
    home_orientation: "portrait",
  },

  {
    src: {
      small: "/images/fotos_small/0006_small.jpg",
      medium: "/images/fotos_medium/0006_medium.jpg",
      large: "/images/fotos_large/0006_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "balnearias", "compania", "posiciones"],
    title: "Dos señoras de espaldas en malla con brazos en jarra",
    slug: "0006",
    home_orientation: "portrait",
  },

  {
    src: {
      small: "/images/fotos_small/0007_small.jpg",
      medium: "/images/fotos_medium/0007_medium.jpg",
      large: "/images/fotos_large/0007_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "balnearias"],
    title: "Señora en reposera tomando sol",
    slug: "0007",
    home_orientation: "landscape",
  },

  {
    src: {
      small: "/images/fotos_small/0008_small.jpg",
      medium: "/images/fotos_medium/0008_medium.jpg",
      large: "/images/fotos_large/0008_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "fucsia"],
    title: "Señora en un ATM",
    slug: "0008",
    home_orientation: "landscape",
  },

  {
    src: {
      small: "/images/fotos_small/0009_small.jpg",
      medium: "/images/fotos_medium/0009_medium.jpg",
      large: "/images/fotos_large/0009_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs"],
    title: "Peluquero",
    slug: "0009",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0010_small.jpg",
      medium: "/images/fotos_medium/0010_medium.jpg",
      large: "/images/fotos_large/0010_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs"],
    title: "Señor en un tren con celular",
    slug: "0010",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0011_small.jpg",
      medium: "/images/fotos_medium/0011_medium.jpg",
      large: "/images/fotos_large/0011_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs"],
    title: "Señor en campo de flores",
    slug: "0011",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0012_small.jpg",
      medium: "/images/fotos_medium/0012_medium.jpg",
      large: "/images/fotos_large/0012_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs"],
    title: "Señora en un Mc Donalds",
    slug: "0012",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0013_small.jpg",
      medium: "/images/fotos_medium/0013_medium.jpg",
      large: "/images/fotos_large/0013_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "balnearias"],
    title: "Señora con algodones en los ojos",
    slug: "0013",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0014_small.jpg",
      medium: "/images/fotos_medium/0014_medium.jpg",
      large: "/images/fotos_large/0014_large.jpg",
      webp: "",
    },
    filters: ["todas", "autos"],
    title: "Auto verde",
    slug: "0014",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0015_small.jpg",
      medium: "/images/fotos_medium/0015_medium.jpg",
      large: "/images/fotos_large/0015_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs"],
    title: "Salón de belleza",
    slug: "0015",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0016_small.jpg",
      medium: "/images/fotos_medium/0016_medium.jpg",
      large: "/images/fotos_large/0016_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs"],
    title: "Peluquero leyendo el diario",
    slug: "0016",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0017_small.jpg",
      medium: "/images/fotos_medium/0017_medium.jpg",
      large: "/images/fotos_large/0017_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "balnearias", "compania"],
    title: "Señoras con sombreros sentadas en la rambla",
    slug: "0017",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0018_small.jpg",
      medium: "/images/fotos_medium/0018_medium.jpg",
      large: "/images/fotos_large/0018_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "balnearias", "compania"],
    title: "Señoras con sombrero panamá",
    slug: "0018",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0019_small.jpg",
      medium: "/images/fotos_medium/0019_medium.jpg",
      large: "/images/fotos_large/0019_large.jpg",
      webp: "",
    },
    filters: ["todas", "balnearias"],
    title: "Pirulines",
    slug: "0019",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0020_small.jpg",
      medium: "/images/fotos_medium/0020_medium.jpg",
      large: "/images/fotos_large/0020_large.jpg",
      webp: "",
    },
    filters: ["todas", "autos"],
    title: "Tapizado",
    slug: "0020",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0021_small.jpg",
      medium: "/images/fotos_medium/0021_medium.jpg",
      large: "/images/fotos_large/0021_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "balnearias", "compania", "posiciones"],
    title: "Dos señoras en malla con brazos en jarra",
    slug: "0021",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0022_small.jpg",
      medium: "/images/fotos_medium/0022_medium.jpg",
      large: "/images/fotos_large/0022_large.jpg",
      webp: "",
    },
    filters: ["todas", "balnearias", "compania"],
    title: "Surfers abrazadas en la playa",
    slug: "0022",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0023_small.jpg",
      medium: "/images/fotos_medium/0023_medium.jpg",
      large: "/images/fotos_large/0023_large.jpg",
      webp: "",
    },
    filters: ["todas", "rincones"],
    title: "Señor en un restorán mirando un cuadro",
    slug: "0023",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0024_small.jpg",
      medium: "/images/fotos_medium/0024_medium.jpg",
      large: "/images/fotos_large/0024_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs"],
    title: "Señora a través de un vidrio",
    slug: "0024",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0025_small.jpg",
      medium: "/images/fotos_medium/0025_medium.jpg",
      large: "/images/fotos_large/0025_large.jpg",
      webp: "",
    },
    filters: ["todas", "perros"],
    title: "Perro entre las flores",
    slug: "0025",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0026_small.jpg",
      medium: "/images/fotos_medium/0026_medium.jpg",
      large: "/images/fotos_large/0026_large.jpg",
      webp: "",
    },
    filters: ["todas", "rincones"],
    title: "Flores",
    slug: "0026",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0027_small.jpg",
      medium: "/images/fotos_medium/0027_medium.jpg",
      large: "/images/fotos_large/0027_large.jpg",
      webp: "",
    },
    filters: ["todas", "rincones"],
    title: "Teléfono público",
    slug: "0027",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0028_small.jpg",
      medium: "/images/fotos_medium/0028_medium.jpg",
      large: "/images/fotos_large/0028_large.jpg",
      webp: "",
    },
    filters: ["todas", "rincones"],
    title: "Mesas junto a un lago",
    slug: "0028",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0030_small.jpg",
      medium: "/images/fotos_medium/0030_medium.jpg",
      large: "/images/fotos_large/0030_large.jpg",
      webp: "",
    },
    filters: ["todas", "autos"],
    title: "Camioneta con sticker de caballos",
    slug: "0030",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0031_small.jpg",
      medium: "/images/fotos_medium/0031_medium.jpg",
      large: "/images/fotos_large/0031_large.jpg",
      webp: "",
    },
    filters: ["todas", "balnearias", "perros"],
    title: "Caniches bajo una sombrilla",
    slug: "0031",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0032_small.jpg",
      medium: "/images/fotos_medium/0032_medium.jpg",
      large: "/images/fotos_large/0032_large.jpg",
      webp: "",
    },
    filters: ["todas", "rincones"],
    title: "Changuitos",
    slug: "0032",
    home_orientation: "",
  },
];
