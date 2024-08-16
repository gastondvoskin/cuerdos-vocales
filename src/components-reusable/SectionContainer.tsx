import { SECTIONS } from "../constants/sections";
import { ISectionContainer } from "../types"; 

const SectionContainer: React.FC<ISectionContainer> = ({ section, children, /* className, */ }) => {
  const orangeBgSections = [SECTIONS.HOME, SECTIONS.VIDEOS, SECTIONS.ALBUM, SECTIONS.CORDURA, SECTIONS.CONTACT];
  const purpleBgSections = [SECTIONS.NEWS, SECTIONS.WE_ARE, SECTIONS.COSQUIN, SECTIONS.CIRCULAR_CONCERT];

  return (
    <section
      id={section}
      className={`
        flex flex-col items-center
        ${orangeBgSections.includes(section) && "bg-[conic-gradient(at_top,_#fad5cb,_#ffffff)]"}
        ${purpleBgSections.includes(section) && "bg-[conic-gradient(at_top,_#eadffa,_#fcd3c8)]"} 
        ${section === SECTIONS.WE_ARE ? "pb-0" : "pb-10"}
        ${section === SECTIONS.CONTACT ? "pt-10" : "pt-20"}
      `}
    >
      {children}
    </section>
  );
};

export default SectionContainer; 