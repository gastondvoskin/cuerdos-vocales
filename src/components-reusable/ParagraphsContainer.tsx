import { IParagraphsContainerProps } from "../types"

const ParagraphsContainer: React.FC<IParagraphsContainerProps> = ({ paragraphs }) => {

  return (
    <div>
      {paragraphs.map((paragraph, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default ParagraphsContainer;
