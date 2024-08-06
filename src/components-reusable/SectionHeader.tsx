import { ISectionHeader } from "../types";

const SectionHeader: React.FC<ISectionHeader> = ({ text }) => {
  return (
    <header>
      <h2>{text}</h2>
    </header>
  );
};

export default SectionHeader;
