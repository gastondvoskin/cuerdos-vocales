// const TARGETS = ["home", "news", "videos", "weAre", "album", "cosquin", "cordura", "circularConcert", "contact"];
import { ITarget } from "../types";

export const SECTIONS = {
  HOME: "home",
  NEWS: "news",
  VIDEOS: "videos",
  WE_ARE: "weAre",
  ALBUM: "album",
  COSQUIN: "cosquin",
  CORDURA: "cordura",
  CIRCULAR_CONCERT: "circularConcert",
  CONTACT: "contact",
};


export const TARGETS: ITarget[] = [
  { id: SECTIONS.HOME, text: "INICIO" },
  { id: SECTIONS.NEWS, text: "NOVEDADES" },
  { id: SECTIONS.VIDEOS, text: "VIDEOS" },
  { id: SECTIONS.WE_ARE, text: "SOMOS" },
  { id: SECTIONS.ALBUM, text: "ÁLBUM" },
  { id: SECTIONS.COSQUIN, text: "COSQUÍN" },
  { id: SECTIONS.CORDURA, text: "CORDURA" },
  { id: SECTIONS.CIRCULAR_CONCERT, text: "CONCIERTO CIRCULAR" },
  { id: SECTIONS.CONTACT, text: "REDES Y CONTACTO" },
]; 
