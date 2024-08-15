import { ISectionContainer } from "../types";

const SectionContainer: React.FC<ISectionContainer> = ({
  sectionId,
  children,
  className,
}) => {
  console.log({ sectionId });
  const orangeBgSections = ["home", "videos", "album", "circularConcert"];
  const purpleBgSections = ["news", "weAre"];

  return (
    <section
      id={sectionId}
      className={`
        pt-20 
        ${className} 
        ${orangeBgSections.includes(sectionId) && "bg-[conic-gradient(at_top,_#f4ded8,_#eaeaea)]"}
        ${purpleBgSections.includes(sectionId) && "bg-[conic-gradient(at_top,_#967BB6,_#F29C85)]"}
      `}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
