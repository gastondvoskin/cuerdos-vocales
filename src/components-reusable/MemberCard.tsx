import { IMemberCardProps } from "../types"
// import aldi from "../assets/images/members/aldi.webp"
// import bori

const MemberCard = ({member, setCurrentMember}: IMemberCardProps) => {
  if (member) {console.log(member.imageSrc)}
  // import 
  return (
    <div className="bg-myOrange-900 w-11/12 max-w-lg">
      {member && 
        <div>
          <h2>{member.name}</h2>
          <p>{member.description}</p>
          <img src={member.imageSrc} alt={`Primer plano de ${member.name}`} />
        </div>
      }
      <button onClick={() => setCurrentMember(null)}>Cerrar</button>
    </div>
  )
}

export default MemberCard