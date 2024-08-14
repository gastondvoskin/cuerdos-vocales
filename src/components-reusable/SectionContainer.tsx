import { ISectionContainer } from "../types";

const SectionContainer: React.FC<ISectionContainer> = ({
  sectionId,
  children,
}) => {
  return (
    <section
      id={sectionId}
      className={`pt-20  bg-[conic-gradient(at_top,_#f4ded8,_#eaeaea)]`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;

/* OLD
bg-gradient-to-b from-myPink-500 to-myPurple-100
*/
