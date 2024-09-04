import members from "../assets/texts/members/members"
import { IMemberCardProps } from "../types"

const MemberCard = ({member, setViewMember}: IMemberCardProps) => {
  return (
    <div className="bg-myOrange-900 w-100 h-300">MemberCard
      <p>{members[member]}</p>
      <button onClick={() => setViewMember(null)}>Cerrar</button>
    </div>
  )
}

export default MemberCard