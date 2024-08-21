// const TARGETS = ["home", "news", "videos", "weAre", "album", "cosquin", "cordura", "circularConcert", "contact"];
import { ITarget } from "../types";
// import { FaBars } from "react-icons/fa6";
import { FaNewspaper, FaVideo, FaUsers, FaMusic, FaGuitar, FaBrain, FaTheaterMasks, FaEnvelope } from 'react-icons/fa';


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
  { id: SECTIONS.NEWS, text: "NOVEDADES", icon: FaNewspaper },
  { id: SECTIONS.VIDEOS, text: "VIDEOS", icon: FaVideo },
  { id: SECTIONS.WE_ARE, text: "SOMOS", icon: FaUsers },
  { id: SECTIONS.ALBUM, text: "ÁLBUM", icon: FaMusic },
  { id: SECTIONS.COSQUIN, text: "COSQUÍN", icon: FaGuitar },
  { id: SECTIONS.CORDURA, text: "CORDURA", icon: FaBrain },
  { id: SECTIONS.CIRCULAR_CONCERT, text: "XIRGU", icon: FaTheaterMasks },
  { id: SECTIONS.CONTACT, text: "CONTACTO", icon: FaEnvelope },
]; 
