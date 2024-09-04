import members from "../assets/texts/members/members"
import { IMemberCardProps } from "../types"
import membersSurnames from "../constants/membersSurnames"

const MemberCard = ({member}: IMemberCardProps) => {
  return (
    <div className="bg-myOrange-900 w-100 h-300">MemberCard
      <p>{members[member]}</p>
    </div>
  )
}

export default MemberCard