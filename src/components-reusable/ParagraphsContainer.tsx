import { IParagraphsContainerProps } from "../types";

const ParagraphsContainer: React.FC<IParagraphsContainerProps> = ({ paragraphs }) => {
  return (
    <div className={`w-full max-w-2xl px-3 pt-5 text-sm text-balance text-center`}>
      {paragraphs.map((paragraph, index: number) => (
        <p key={index} className="pb-2">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default ParagraphsContainer;
