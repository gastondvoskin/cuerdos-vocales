import ParagraphsContainer from "../components-reusable/ParagraphsContainer"
import { cosquinParagraphs } from "../assets/texts/sections"

const Cosquin = () => {
  return (
    <div>
      <h2>COSQUIN</h2>
      <ParagraphsContainer paragraphs={cosquinParagraphs}/>
    </div>
  )
}

export default Cosquin