import { IMemberCardProps } from "../types"

const MemberCard = ({member, setCurrentMember}: IMemberCardProps) => {

  return (
    <div className="bg-myOrange-900 w-100 h-300">
      {member && 
        <div>
          <h2>{member.name}</h2>
          <p>{member.description}</p>
        </div>
      }
      <button onClick={() => setCurrentMember(null)}>Cerrar</button>
    </div>
  )
}

export default MemberCard