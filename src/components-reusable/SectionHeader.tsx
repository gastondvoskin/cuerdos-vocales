import { ISectionHeader } from "../types";

const SectionHeader: React.FC<ISectionHeader> = ({ text }) => {
  return (
    <header className="self-end pr-[4vw] pt-2 pb-3">
      <h2 className={`text-myPurple-900 text-2xl font-bold drop-shadow-md`}>{text}</h2>
    </header>
  );
};

export default SectionHeader;
