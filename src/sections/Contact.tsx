import ParagraphsContainer from "../components-reusable/ParagraphsContainer"
import { contactParagraphs } from "../assets/texts/sections"

const Contact = () => {
  return (
    <div>
      <h2>REDES Y CONTACTO</h2>
      <ParagraphsContainer paragraphs={contactParagraphs}/>
    </div>
  )
}

export default Contact