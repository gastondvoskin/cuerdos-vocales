import { IMemberCardProps } from "../types"

const MemberCard = ({member, setCurrentMember}: IMemberCardProps) => {
  // if (member) {console.log(member.imageSrc)}

  return (
    member && (
      <div className="absolute flex flex-col text-center items-center  p-6 bg-myWhite-100 w-11/12 max-w-sm shadow-md rounded-md">
        <h2 className="text-2xl">{member.name}</h2>
        <img className="w-72 aspect-square object-cover" src={member.imageSrc} alt={`Primer plano de ${member.name}`} />
        <p className="text-sm">{member.description}</p>
        <button onClick={() => setCurrentMember(null)}>Cerrar</button>
      </div>
    )
  )

}

export default MemberCard