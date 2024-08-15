import { ISectionHeader } from "../types";

const SectionHeader: React.FC<ISectionHeader> = ({ text }) => {
  return (
    <header className="self-end pr-4 pt-2 pb-8">
      <h2 className={`text-myPurple-900 text-2xl font-medium`}>{text}</h2>
    </header>
  );
};

export default SectionHeader;
