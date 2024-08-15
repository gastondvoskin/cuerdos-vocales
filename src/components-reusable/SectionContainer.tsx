import { SECTIONS } from "../constants/sections";
import { ISectionContainer } from "../types";

const SectionContainer: React.FC<ISectionContainer> = ({
  section,
  children,
  // className,
}) => {
  console.log({ section });
  const orangeBgSections = [SECTIONS.HOME, SECTIONS.VIDEOS, SECTIONS.ALBUM, SECTIONS.CIRCULAR_CONCERT];
  const purpleBgSections = [SECTIONS.NEWS, SECTIONS.WE_ARE];

  return (
    <section
      id={section}
      className={`
        pt-20 
        flex flex-col items-center
        ${orangeBgSections.includes(section) && "bg-[conic-gradient(at_top,_#f4ded8,_#eaeaea)]"}
        ${purpleBgSections.includes(section) && "bg-[conic-gradient(at_top,_#967BB6,_#F29C85)]"}
      `}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
