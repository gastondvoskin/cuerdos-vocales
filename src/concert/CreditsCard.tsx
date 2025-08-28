const CreditsCard: React.FC = () => {
  const members = [
    { name: "Ale Randazzo", role: "Voz, guitarra, producción" },
    { name: "Ale Trosman", role: "Voz, pandero" },
    { name: "Ber Guarrochena", role: "Voz, producción" },
    { name: "Cata Terlerman", role: "Voz, pandero" },
    { name: "Gastón Dvoskin", role: "Percusión, dirección" },
    { name: "Lucre Flores", role: "Voz, bombo" },
    { name: "Manuel Rubio", role: "Percusión, producción" },
    { name: "María Aldana Gómez", role: "Voz, clarinete, wasá" },
    { name: "Sacha Max", role: "Voz, zapateo" },
    { name: "Pau Bori", role: "Voz, shakers" },
  ];

  const guests = [{ name: "Abril Lukac", role: "Danza" }];

  const otherCredits = [
    { name: "Cultural Thames", role: "Centro cultural" },
    { name: "Juan Galimberti y José Mercado", role: "Sonido" },
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
        <h4 className="text-lg">Invitada</h4>
        <ul>
          {guests.map((guest) => (
            <li>{`${guest.name} - ${guest.role}`}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-lg">Técnica</h4>
        <ul>
          {otherCredits.map((credit) => (
            <li>{`${credit.name} - ${credit.role}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreditsCard;
