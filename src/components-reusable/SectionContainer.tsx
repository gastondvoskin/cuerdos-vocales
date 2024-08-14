const SectionContainer = ({ sectionId, children }: { sectionId: string, children: React.ReactNode }) => {
  return (
    <section id={sectionId} className={`pt-20 bg-gradient-to-b from-myPink-500 to-myPurple-100`}>
      {children}
    </section>
  );
};

export default SectionContainer;
