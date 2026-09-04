const CreditsCard: React.FC = () => {
  const members = [
    { name: "Ale Randazzo", role: "Voz, guitarra, producción" },
    { name: "Ale Trosman", role: "Voz, pandero" },
    { name: "Ber Guarrochena", role: "Voz, visuales" },
    { name: "Cata Terlerman", role: "Voz, pandero" },
    { name: "Lucre Flores", role: "Voz, bombo" },
    { name: "Manuel Rubio", role: "Percusión, producción" },
    { name: "Sacha Max", role: "Voz, zapateo" },
    { name: "Pau Bori", role: "Voz, shakers" },
    { name: "Gastón Dvoskin", role: "Dirección" },
  ];

  // const guests = [
  //   { name: "Cami Pino", role: "Voz" },
  // ];

  const otherCredits = [
    { name: "Cultural Thames", role: "Centro cultural" },
    { name: "Andrés Huevo", role: "Sonido" },
    { name: "Juan Galimberti", role: "Coordinación Técnica" },
    { name: "Leila Pablo", role: "Producción Thames" },
  ];

  return (
    <div
      className={`flex flex-col items-center w-full h-full bg-myWhite-100 text-myGrey-900 justify-center gap-2 text-center text-xs`}
    >
      <div>
        <h4 className="text-xl">Cuerdos Vocales</h4>
        <ul>
          {members.map((member) => (
            <li>{`${member.name} - ${member.role}`}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg">Invitades</h4>
        <ul>
          {/* {guests.length > 0 && guests.map((guest) => (
            <li>{`${guest.name} - ${guest.role}`}</li>
          ))} */}
          <li>Público - Improvisación 💕</li>
        </ul>
      </div>
      
      <div>
        <h4 className="text-lg">Técnica</h4>
        <ul>
          {otherCredits.map((credit) => (
            <li>{`${credit.name} - ${credit.role}`}</li>
          ))}
        </ul>
      </div>

      <p className="text-sm font-semibold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        ¡Hasta la próxima! ✨
      </p>
    </div>
  );
};

export default CreditsCard;
