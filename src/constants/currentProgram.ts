import { SongId } from "@/constants/songs";

// Program for the upcoming concert, in the order the songs will be played.
// Each entry is a `SongId` (a key of `songCatalog` in songs.ts), so a
// misspelled or nonexistent id is a TypeScript compile error, not a silent
// runtime failure.
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
