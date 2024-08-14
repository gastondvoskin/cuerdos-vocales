import { ISectionContainer } from "../types";

const SectionContainer: React.FC<ISectionContainer> = ({ sectionId, children, className }) => {
  return (
    <section
      id={sectionId}
      className={`pt-20 bg-[conic-gradient(at_top,_#f4ded8,_#eaeaea)] ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;

