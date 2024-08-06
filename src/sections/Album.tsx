import ParagraphsContainer from "../components-reusable/ParagraphsContainer"
import { albumParagraphs } from "../assets/texts/sections"

const Album = () => {
  return (
    <div>
      <h2>ALBUM</h2>
      <ParagraphsContainer paragraphs={albumParagraphs}/>
    </div>
  )
}

export default Album