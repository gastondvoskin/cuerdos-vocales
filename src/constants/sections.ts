// const TARGETS = ["home", "news", "videos", "weAre", "album", "cosquin", "cordura", "circularConcert", "contact"];
import { ITarget } from "../types";
// import { FaBars } from "react-icons/fa6";
import { FaBullhorn , FaVideo, FaUsers, FaCompactDisc, FaGuitar, FaCircle, FaEnvelope } from 'react-icons/fa';
import { GiPoncho } from 'react-icons/gi';


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
  // { id: SECTIONS.HOME, text: "INICIO" },
  { id: SECTIONS.NEWS, text: "NOVEDADES", icon: FaBullhorn  },
  { id: SECTIONS.VIDEOS, text: "VIDEOS", icon: FaVideo },
  { id: SECTIONS.WE_ARE, text: "SOMOS", icon: FaUsers },
  { id: SECTIONS.ALBUM, text: "ÁLBUM", icon: FaCompactDisc },
  { id: SECTIONS.COSQUIN, text: "COSQUÍN", icon: GiPoncho },
  { id: SECTIONS.CORDURA, text: "CORDURA", icon: FaGuitar },
  { id: SECTIONS.CIRCULAR_CONCERT, text: "XIRGU", icon: FaCircle },
  { id: SECTIONS.CONTACT, text: "CONTACTO", icon: FaEnvelope },
]; 
