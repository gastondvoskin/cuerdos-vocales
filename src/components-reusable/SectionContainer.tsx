import { ISectionContainer } from "../types";

const SectionContainer: React.FC<ISectionContainer> = ({ sectionId, children }) => {
  return (
    <section id={sectionId} className={`pt-20 bg-gradient-to-b from-myPink-500 to-myPurple-100`}>
      {children}
    </section>
  );
};

export default SectionContainer;
