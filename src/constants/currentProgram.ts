import { SongId } from "@/constants/songs";

// Programa del próximo concierto, en el orden en que se van a tocar las
// canciones. Cada entrada es un `SongId` (clave de `songCatalog` en
// songs.ts), así que un id mal escrito o inexistente es un error de
// compilación de TypeScript, no un fallo silencioso en runtime.
export const CURRENT_PROGRAM: SongId[] = [
  "calendario",
  "sayasAfrobolivianas",
  "chayas",
  "vidalaSinVoz",
  "losTresDeseosDeSiempre",
  "florEnLaNieve",
  "corazon",
  "coplasAlAgua",
  "heSembrado",
  "chacareraParaMiVuelta",
  "chacareraSantiaguena",
  "seguidillasDelLaurel",
  "unDiaImproConLaGente",
  "charrosEspanoles",
  "charradaDeLosPerros",
  "unGranRegalo",
  "conselho",
  "balderramaLunaTucumana",
];
