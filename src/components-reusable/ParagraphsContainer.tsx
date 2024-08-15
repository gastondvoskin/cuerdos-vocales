import { IParagraphsContainerProps } from "../types";

const ParagraphsContainer: React.FC<IParagraphsContainerProps> = ({ paragraphs }) => {
  return (
    <div className="px-3 pt-5 text-sm">
      {paragraphs.map((paragraph, index: number) => (
        <p key={index} className="pb-2 ">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default ParagraphsContainer;
