import { IMemberCardProps } from "../types"

const MemberCard = ({member, setCurrentMember}: IMemberCardProps) => {
  // if (member) {console.log(member.imageSrc)}

  return (
    member && (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-center items-center p-6 bg-myWhite-100 w-11/12 max-w-sm shadow-md rounded-md">
        <h2 className="text-2xl text-myOlive-900">{member.name}</h2>
        <img className="py-4 w-56 aspect-square object-cover" src={member.imageSrc} alt={`Primer plano de ${member.name}`} />
        <p className="text-xs">{member.description}</p>
        <button onClick={() => setCurrentMember(null)}>Cerrar</button>
      </div>
    )
  )

}

export default MemberCard