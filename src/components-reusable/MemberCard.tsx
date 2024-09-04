const MemberCard = ({member}: {member: null | "dvoskin" | "randazzo | guarrochena | estrach | trosman | flores | gomez | bori | telerman"}) => {
  return (
    <div className="bg-myOrange-900 w-100 h-300">MemberCard
      <p>{member}</p>
    </div>
  )
}

export default MemberCard