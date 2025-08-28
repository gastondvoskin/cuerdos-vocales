import { ISong } from "@/types";

import andando from "@/assets/images/songImages/andando.webp";
import cancionDeCuna from "@/assets/images/songImages/cancionDeCuna.webp";
import chacarera from "@/assets/images/songImages/chacarera.webp";
import charrada from "@/assets/images/songImages/charrada.webp";
import charros from "@/assets/images/songImages/charros.webp";
import coplasAlAgua from "@/assets/images/songImages/coplasAlAgua.webp";
import laMarea from "@/assets/images/songImages/laMarea.jpg"; 
import seguidillas from "@/assets/images/songImages/seguidillas.webp";
import unGranRegalo from "@/assets/images/songImages/unGranRegalo.webp";
import vidalaSinVoz from "@/assets/images/songImages/vidalaSinVoz.webp";
import caramba from "@/assets/images/songImages/caramba.webp";
import conselho from "@/assets/images/songImages/conselho.webp";
import heSembrado from "@/assets/images/songImages/heSembrado.webp";
import losTresDeseos from "@/assets/images/songImages/losTresDeseos.webp";
import pajarosDeBarro from "@/assets/images/songImages/pajarosDeBarro.webp";
import zaspalo from "@/assets/images/songImages/zaspalo.webp";
import lavanderas from "@/assets/images/songImages/lavanderas.webp";

// import angelitaRosales from "@/assets/images/songImages/angelitaRosales.webp";
// import arribaQuemandoElSol from "@/assets/images/songImages/arribaQuemandoElSol.webp";
// import cuandoMuere from "@/assets/images/songImages/cuandoMuere.webp";
// import lacrymosa from "@/assets/images/songImages/lacrymosa.webp";
// import laEstrellaAzul from "@/assets/images/songImages/laEstrellaAzul.webp";
// import loQueUstedMerece from "@/assets/images/songImages/loQueUstedMerece.webp";




const songs: ISong[] = [
  {
    name: "Canto de Lavanderas (fragmento)",
    composer: "Aquiles Báez",
    arranger: "Cuerdos Vocales",
    species: "Cantos venezolanos",
    imageSrc: lavanderas,
  },
  {
    name: "La marea",
    composer: "Anónimo",
    arranger: "Aldana Gómez",
    species: "Currulao",
    imageSrc: laMarea,
  },
  {
    name: "Chacarera santiagueña",
    composer: "Anónimo",
    arranger: "Eduardo Ferraudi",
    species: "Chacarera",
    imageSrc: chacarera,
  },
  {
    name: "El caramba",
    composer: "Anónimo",
    arranger: "Bernardo Guarrochena",
    species: "Caramba",
    imageSrc: caramba,
  },
  {
    name: "Vidala sin voz",
    composer: "Juan Quintero",
    arranger: "Santiago Ruiz",
    species: "Vidala",
    imageSrc: vidalaSinVoz,
  },
  {
    name: "Ghole Gumai Lalna (fragmento)",
    composer: "Anónimo",
    arranger: "Cuerdos vocales",
    species: "Himno sij",
    imageSrc: cancionDeCuna,
  },
  {
    name: "Zaspalo mome kraj more",
    composer: "Anónimo",
    arranger: "Cuerdos Vocales",
    species: "Popular búlgara",
    imageSrc: zaspalo,
  },
  {
    name: "Andando",
    composer: "Anónimo",
    arranger: "Juan Quintero",
    species: "Vidala",
    imageSrc: andando,
  },
  {
    name: "He sembrado una pasión y El gavilán",
    composer: "Anónimo - Violeta Parra",
    arranger: "Catalina Telerman",
    species: "Vidala",
    imageSrc: heSembrado,
  },
  {
    name: "Coplas al agua",
    composer: "Juan Quintero",
    arranger: "Bernardo Guarrochena",
    species: "Canción",
    imageSrc: coplasAlAgua,
  },
  {
    name: "Los tres deseos de siempre",
    composer: "Carlos Aguirre",
    arranger: "Fernando Carmona",
    species: "huayno",
    imageSrc: losTresDeseos,
  },
  {
    name: "Canción de cuna intervenida",
    composer: "S. Shock - M. Buceta",
    arranger: "Cuerdos Vocales",
    species: "Canción - vidala",
    imageSrc: cancionDeCuna,
  },
  {
    name: "Pájaros de barro (fragmento)",
    composer: "Manolo García",
    arranger: "Cuerdos Vocales",
    species: "Rumba",
    imageSrc: pajarosDeBarro,
  },
  {
    name: "Seguidillas del laurel",
    composer: "Anónimo",
    arranger: "Manuel Estrach",
    species: "Seguidillas",
    imageSrc: seguidillas,
  },
  {
    name: "Charros españoles",
    composer: "Anónimo",
    arranger: "J. Quintero - Manuel Rubio",
    species: "Charros",
    imageSrc: charros,
  },
  {
    name: "Charrada de los perros",
    composer: "Anónimo",
    arranger: "J. Quintero - Manuel Rubio",
    species: "Charrada",
    imageSrc: charrada,
  },
  {
    name: "Conselho",
    composer: "Almir Guineto",
    arranger: "Cuerdos Vocales",
    species: "Samba",
    imageSrc: conselho,
  },
  {
    name: "Un gran regalo",
    composer: "Nano Stern",
    arranger: "Cuerdos Vocales",
    species: "Canción",
    imageSrc: unGranRegalo,
  },



  // {
  //   name: "XXXX",
  //   composer: "XXXX",
  //   arranger: "",
  //   species: "",
  //   imageSrc: cancionDeCuna,
  // },

  // {
  //   name: "Arriba quemando el Sol",
  //   composer: "Violeta Parra",
  //   arranger: "Gastón Dvoskin",
  //   species: "Huayno",
  //   imageSrc: arribaQuemandoElSol,
  // },
  // {
  //   name: "Lo que usted merece",
  //   composer: "Jorge Fandermole",
  //   arranger: "Bernardo Guarrochena",
  //   species: "Canción",
  //   imageSrc: loQueUstedMerece,
  // },
  // {
  //   name: "Lacrymosa",
  //   composer: "Calixto Álvarez",
  //   arranger: "Calixto Álvarez",
  //   species: "Requiem osún",
  //   imageSrc: lacrymosa,
  // },
  // {
  //   name: "La estrella azul",
  //   composer: "Peteco Carabajal",
  //   arranger: "Eduardo Ferraudi",
  //   species: "Aire de huayno",
  //   imageSrc: laEstrellaAzul,
  // },
  // {
  //   name: "Cuando muere el angelito",
  //   composer: "E. Inchausti - M. Ferreyra",
  //   arranger: "Eduardo Ferraudi",
  //   species: "Chacarera",
  //   imageSrc: cuandoMuere,
  // },
  // {
  //   name: "Angelita Rosales",
  //   composer: "T Parodi - J. Falú",
  //   arranger: "Alejandro Randazzo",
  //   species: "Huayno",
  //   imageSrc: angelitaRosales,
  // },
];


export default songs;