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
    home_orientation: "landscape",
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
    home_orientation: "landscape",
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
    home_orientation: "landscape",
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
    home_orientation: "portrait",
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
    home_orientation: "landscape",
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
    home_orientation: "landscape",
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
    home_orientation: "portrait",
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
    home_orientation: "portrait",
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
    home_orientation: "landscape",
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
    home_orientation: "portrait",
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

  {
    src: {
      small: "/images/fotos_small/0033_small.jpg",
      medium: "/images/fotos_medium/0033_medium.jpg",
      large: "/images/fotos_large/0033_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "balnearias"],
    title: "Señor en andador mirando el celular junto al mar",
    slug: "0033",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0034_small.jpg",
      medium: "/images/fotos_medium/0034_medium.jpg",
      large: "/images/fotos_large/0034_large.jpg",
      webp: "",
    },
    filters: ["todas", "fucsia", "senorxs", "balnearias"],
    title: "Señor mirando el mar",
    slug: "0034",
    home_orientation: "landscape",
  },

  {
    src: {
      small: "/images/fotos_small/0035_small.jpg",
      medium: "/images/fotos_medium/0035_medium.jpg",
      large: "/images/fotos_large/0035_large.jpg",
      webp: "",
    },
    filters: ["todas", "rincones"],
    title: "Señor jugando al tejo",
    slug: "0035",
    home_orientation: "portrait",
  },

  {
    src: {
      small: "/images/fotos_small/0036_small.jpg",
      medium: "/images/fotos_medium/0036_medium.jpg",
      large: "/images/fotos_large/0036_large.jpg",
      webp: "",
    },
    filters: ["todas", "balnearias", "senorxs"],
    title: "Vendedor en la playa",
    slug: "0036",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0037_small.jpg",
      medium: "/images/fotos_medium/0037_medium.jpg",
      large: "/images/fotos_large/0037_large.jpg",
      webp: "",
    },
    filters: ["todas", "rincones", "balnearias"],
    title: "Sombrilla junto al río",
    slug: "0037",
    home_orientation: "portrait",
  },

  {
    src: {
      small: "/images/fotos_small/0038_small.jpg",
      medium: "/images/fotos_medium/0038_medium.jpg",
      large: "/images/fotos_large/0038_large.jpg",
      webp: "",
    },
    filters: ["todas", "rincones"],
    title: "Piso con patrón",
    slug: "0038",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0039_small.jpg",
      medium: "/images/fotos_medium/0039_medium.jpg",
      large: "/images/fotos_large/0039_large.jpg",
      webp: "",
    },
    filters: ["todas"],
    title: "Hombres con chroma junto a lago",
    slug: "0039",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0040_small.jpg",
      medium: "/images/fotos_medium/0040_medium.jpg",
      large: "/images/fotos_large/0040_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "rincones"],
    title: "Señor jugando al pool",
    slug: "0040",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0041_small.jpg",
      medium: "/images/fotos_medium/0041_medium.jpg",
      large: "/images/fotos_large/0041_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs"],
    title: "señor sentado junto a un pool",
    slug: "0041",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0042_small.jpg",
      medium: "/images/fotos_medium/0042_medium.jpg",
      large: "/images/fotos_large/0042_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "balnearias"],
    title: "señora tomando sol junto al río",
    slug: "0042",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0043_small.jpg",
      medium: "/images/fotos_medium/0043_medium.jpg",
      large: "/images/fotos_large/0043_large.jpg",
      webp: "",
    },
    filters: ["todas", "rincones"],
    title: "Máquina de hielo",
    slug: "0043",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0044_small.jpg",
      medium: "/images/fotos_medium/0044_medium.jpg",
      large: "/images/fotos_large/0044_large.jpg",
      webp: "",
    },
    filters: ["todas", "rincones", "balnearias"],
    title: "Pileta vacía",
    slug: "0044",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0045_small.jpg",
      medium: "/images/fotos_medium/0045_medium.jpg",
      large: "/images/fotos_large/0045_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "compania", "balnearias"],
    title: "Señoras tomando mate junto a castillo de arena",
    slug: "0045",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0046_small.jpg",
      medium: "/images/fotos_medium/0046_medium.jpg",
      large: "/images/fotos_large/0046_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "balnearias", "fucsia"],
    title: "Señora tomando sol en escalera",
    slug: "0046",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0047_small.jpg",
      medium: "/images/fotos_medium/0047_medium.jpg",
      large: "/images/fotos_large/0047_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "compania", "balnearias"],
    title: "Señoras rubias charlando",
    slug: "0047",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0048_small.jpg",
      medium: "/images/fotos_medium/0048_medium.jpg",
      large: "/images/fotos_large/0048_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "compania", "balnearias"],
    title: "Pareja en reposeras",
    slug: "0048",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0049_small.jpg",
      medium: "/images/fotos_medium/0049_medium.jpg",
      large: "/images/fotos_large/0049_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "perros"],
    title: "Señora con caniche y camperas puffy",
    slug: "0049",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0050_small.jpg",
      medium: "/images/fotos_medium/0050_medium.jpg",
      large: "/images/fotos_large/0050_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs"],
    title: "Sesión de masajes en el Barrio Chino",
    slug: "0050",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0051_small.jpg",
      medium: "/images/fotos_medium/0051_medium.jpg",
      large: "/images/fotos_large/0051_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "balnearias", "fucsia"],
    title: "Señora tomando sol en escalera de espaldas",
    slug: "0051",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0052_small.jpg",
      medium: "/images/fotos_medium/0052_medium.jpg",
      large: "/images/fotos_large/0052_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "balnearias", "fucsia"],
    title: "Señora tomando sol en escalera con palmera de fondo",
    slug: "0052",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0053_small.jpg",
      medium: "/images/fotos_medium/0053_medium.jpg",
      large: "/images/fotos_large/0053_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "balnearias"],
    title: "Dos señores tomando sol en Mar del Plata",
    slug: "0053",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0054_small.jpg",
      medium: "/images/fotos_medium/0054_medium.jpg",
      large: "/images/fotos_large/0054_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "balnearias"],
    title: "Partido de tejo",
    slug: "0054",
    home_orientation: "landscape",
  },

  {
    src: {
      small: "/images/fotos_small/0055_small.jpg",
      medium: "/images/fotos_medium/0055_medium.jpg",
      large: "/images/fotos_large/0055_large.jpg",
      webp: "",
    },
    filters: ["todas", "rincones"],
    title: "Mirador",
    slug: "0055",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0056_small.jpg",
      medium: "/images/fotos_medium/0056_medium.jpg",
      large: "/images/fotos_large/0056_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs"],
    title: "Señor en un café en la montaña",
    slug: "0056",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0057_small.jpg",
      medium: "/images/fotos_medium/0057_medium.jpg",
      large: "/images/fotos_large/0057_large.jpg",
      webp: "",
    },
    filters: ["todas", "autos"],
    title: "Auto celeste con escarcha",
    slug: "0057",
    home_orientation: "portrait",
  },

  {
    src: {
      small: "/images/fotos_small/0058_small.jpg",
      medium: "/images/fotos_medium/0058_medium.jpg",
      large: "/images/fotos_large/0058_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "balnearias"],
    title: "Señor tomando sol en las piedras junto al mar",
    slug: "0058",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0059_small.jpg",
      medium: "/images/fotos_medium/0059_medium.jpg",
      large: "/images/fotos_large/0059_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs"],
    title: "Kioskero de diarios",
    slug: "0059",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0060_small.jpg",
      medium: "/images/fotos_medium/0060_medium.jpg",
      large: "/images/fotos_large/0060_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "balnearias", "compania"],
    title: "Cinco señoras en reposeras de colores",
    slug: "0060",
    home_orientation: "landscape",
  },

  {
    src: {
      small: "/images/fotos_small/0061_small.jpg",
      medium: "/images/fotos_medium/0061_medium.jpg",
      large: "/images/fotos_large/0061_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "balnearias"],
    title: "Partido de tejo en la playa",
    slug: "0061",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0062_small.jpg",
      medium: "/images/fotos_medium/0062_medium.jpg",
      large: "/images/fotos_large/0062_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "balnearias", "compania"],
    title: "Dos señoras junto a restorán",
    slug: "0062",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0063_small.jpg",
      medium: "/images/fotos_medium/0063_medium.jpg",
      large: "/images/fotos_large/0063_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "balnearias"],
    title: "Señora de espaldas, foto velada",
    slug: "0063",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0064_small.jpg",
      medium: "/images/fotos_medium/0064_medium.jpg",
      large: "/images/fotos_large/0064_large.jpg",
      webp: "",
    },
    filters: ["todas", "rincones"],
    title: "Pileta de natación",
    slug: "0064",
    home_orientation: "portrait",
  },

  {
    src: {
      small: "/images/fotos_small/0065_small.jpg",
      medium: "/images/fotos_medium/0065_medium.jpg",
      large: "/images/fotos_large/0065_large.jpg",
      webp: "",
    },
    filters: ["todas", "rincones"],
    title: "Gradas junto a pileta de natación",
    slug: "0065",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0066_small.jpg",
      medium: "/images/fotos_medium/0066_medium.jpg",
      large: "/images/fotos_large/0066_large.jpg",
      webp: "",
    },
    filters: ["todas", "rincones"],
    title: "Nadador sentado en gradas",
    slug: "0066",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0067_small.jpg",
      medium: "/images/fotos_medium/0067_medium.jpg",
      large: "/images/fotos_large/0067_large.jpg",
      webp: "",
    },
    filters: ["todas", "rincones"],
    title: "Ventanas junto pileta de natación",
    slug: "0067",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0068_small.jpg",
      medium: "/images/fotos_medium/0068_medium.jpg",
      large: "/images/fotos_large/0068_large.jpg",
      webp: "",
    },
    filters: ["todas", "autos"],
    title: "Auto naranja",
    slug: "0068",
    home_orientation: "portrait",
  },

  {
    src: {
      small: "/images/fotos_small/0069_small.jpg",
      medium: "/images/fotos_medium/0069_medium.jpg",
      large: "/images/fotos_large/0069_large.jpg",
      webp: "",
    },
    filters: ["todas", "autos"],
    title: "Fitito rojo",
    slug: "0069",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0070_small.jpg",
      medium: "/images/fotos_medium/0070_medium.jpg",
      large: "/images/fotos_large/0070_large.jpg",
      webp: "",
    },
    filters: ["todas", "autos"],
    title: "Escarabajo rojo en Barrio Los Andes",
    slug: "0070",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0071_small.jpg",
      medium: "/images/fotos_medium/0071_medium.jpg",
      large: "/images/fotos_large/0071_large.jpg",
      webp: "",
    },
    filters: ["todas", "autos", "rincones"],
    title: "Auto rojo en lava-autos",
    slug: "0071",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0072_small.jpg",
      medium: "/images/fotos_medium/0072_medium.jpg",
      large: "/images/fotos_large/0072_large.jpg",
      webp: "",
    },
    filters: ["todas", "rincones"],
    title: "Balanza fábrica de pastas",
    slug: "0072",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0073_small.jpg",
      medium: "/images/fotos_medium/0073_medium.jpg",
      large: "/images/fotos_large/0073_large.jpg",
      webp: "",
    },
    filters: ["todas", "rincones"],
    title: "Techo de fábrica de pastas",
    slug: "0073",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0074_small.jpg",
      medium: "/images/fotos_medium/0074_medium.jpg",
      large: "/images/fotos_large/0074_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "perros"],
    title: "Señora paseando dos perros",
    slug: "0074",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0075_small.jpg",
      medium: "/images/fotos_medium/0075_medium.jpg",
      large: "/images/fotos_large/0075_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "balnearias"],
    title: "Mar del Plata ciudad feliz",
    slug: "0075",
    home_orientation: "landscape",
  },

  {
    src: {
      small: "/images/fotos_small/0076_small.jpg",
      medium: "/images/fotos_medium/0076_medium.jpg",
      large: "/images/fotos_large/0076_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "compania"],
    title: "Dos señoras con lentes de sol",
    slug: "0076",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0077_small.jpg",
      medium: "/images/fotos_medium/0077_medium.jpg",
      large: "/images/fotos_large/0077_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "compania"],
    title: "Dos señorxs caminando en la rambla",
    slug: "0077",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0078_small.jpg",
      medium: "/images/fotos_medium/0078_medium.jpg",
      large: "/images/fotos_large/0078_large.jpg",
      webp: "",
    },
    filters: ["todas", "perros"],
    title: "Perro con colitas de pelo",
    slug: "0078",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0079_small.jpg",
      medium: "/images/fotos_medium/0079_medium.jpg",
      large: "/images/fotos_large/0079_large.jpg",
      webp: "",
    },
    filters: ["todas", "perros"],
    title: "Perro con colitas de pelo de costado",
    slug: "0079",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0080_small.jpg",
      medium: "/images/fotos_medium/0080_medium.jpg",
      large: "/images/fotos_large/0080_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "compania"],
    title: "Señoras con andador en bingo",
    slug: "0080",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0081_small.jpg",
      medium: "/images/fotos_medium/0081_medium.jpg",
      large: "/images/fotos_large/0081_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "fucsia"],
    title: "Señoras en el faena",
    slug: "0081",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0082_small.jpg",
      medium: "/images/fotos_medium/0082_medium.jpg",
      large: "/images/fotos_large/0082_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "compania", "rincones"],
    title: "Señoras en Bar Mickey",
    slug: "0082",
    home_orientation: "landscape",
  },

  {
    src: {
      small: "/images/fotos_small/0083_small.jpg",
      medium: "/images/fotos_medium/0083_medium.jpg",
      large: "/images/fotos_large/0083_large.jpg",
      webp: "",
    },
    filters: ["todas", "rincones", "balnearias"],
    title: "Pochoclos Alf",
    slug: "0083",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0084_small.jpg",
      medium: "/images/fotos_medium/0084_medium.jpg",
      large: "/images/fotos_large/0084_large.jpg",
      webp: "",
    },
    filters: ["todas"],
    title: "Consejero matrimonial",
    slug: "0084",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0085_small.jpg",
      medium: "/images/fotos_medium/0085_medium.jpg",
      large: "/images/fotos_large/0085_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "fucsia", "compania"],
    title: "Señoras caminando sobre alfombra fucsia",
    slug: "0085",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0086_small.jpg",
      medium: "/images/fotos_medium/0086_medium.jpg",
      large: "/images/fotos_large/0086_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs"],
    title: "Señora en sillon de masajes",
    slug: "0086",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0087_small.jpg",
      medium: "/images/fotos_medium/0087_medium.jpg",
      large: "/images/fotos_large/0087_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs"],
    title: "Señora con la cara apoyada en el sillon de masajes",
    slug: "0087",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0088_small.jpg",
      medium: "/images/fotos_medium/0088_medium.jpg",
      large: "/images/fotos_large/0088_large.jpg",
      webp: "",
    },
    filters: ["todas", "rincones", "autos"],
    title: "Garage con piso a cuadros",
    slug: "0088",
    home_orientation: "",
  },

  {
    src: {
      small: "/images/fotos_small/0089_small.jpg",
      medium: "/images/fotos_medium/0089_medium.jpg",
      large: "/images/fotos_large/0089_large.jpg",
      webp: "",
    },
    filters: ["todas", "senorxs", "compania"],
    title: "Señoras caminando en Recoleta",
    slug: "0089",
    home_orientation: "",
  },
];
