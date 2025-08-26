const CreditsCard: React.FC = () => {
  const members = [
    { name: "Aldi Gómez", role: "Voz, clarinete, wasá" },
    { name: "Ale Randazzo", role: "Voz, guitarra, producción" },
    { name: "Ale Trosman", role: "Voz, pandero" },
    { name: "Ber Guarrochena", role: "Voz, producción" },
    { name: "Cata Terlerman", role: "Voz, pandero" },
    { name: "Gastón Dvoskin", role: "Percusión, dirección" },
    { name: "Lucre Flores", role: "Voz, bombo" },
    { name: "Manu Tirso", role: "Percusión, producción" },
    { name: "Max Lukac", role: "Voz, zapateo" },
    { name: "Pau Bori", role: "Voz, shakers" },
  ];

  const guests = [{ name: "Abril Lukac", role: "Danza" }];

  const otherCredits = [
    { name: "Cultural Thames", role: "Centro cultural" },
    { name: "José Mercado", role: "Sonido" },
  ];

  return (
    <div
      className={`flex flex-col items-center w-full h-full bg-myWhite-100 text-myGrey-900`}
    >
      <div className="flex flex-col gap-2 text-center text-xs">
        <div>
          <h4 className="text-lg">Cuerdos Vocales</h4>
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
    </div>
  );
};

export default CreditsCard;
