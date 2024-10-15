import { IMemberCardProps } from "../types"
import { FaX } from "react-icons/fa6"

const MemberCard = ({member, setCurrentMember}: IMemberCardProps) => {
  // if (member) {console.log(member.imageSrc)}

  return (
    member && (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-center items-center p-4 bg-myWhite-100 w-11/12 max-w-sm shadow-2xl rounded-md z-10">
        <button className="absolute top-2 right-2 text-myBordeaux-500 border border-myBordeaux-500 p-1 hover:bg-myBordeaux-100 hover:text-myWhite-100" onClick={() => setCurrentMember(null)}><FaX /></button>
        <h2 className="text-lg md:text-xl text-myPurple-900 font-bold animate-fadeIn">{member.name}</h2>
        <img className="py-4 w-40 md:w-56 aspect-square object-cover" src={member.imageSrc} alt={`Primer plano de ${member.name}`} />
        <p className="text-[10px] md:text-xs">{member.description}</p>
      </div>
    )
  )

}

export default MemberCard