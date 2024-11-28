const Xirgu: React.FC = () => {
  const songNames = [
    "Esta noche no tengo miedo",
    "Chacarera santiagueña",
    "Arriba quemando el Sol",
    "Lo que usted merece",
    "Lacrymosa",
    "Vidala sin voz",
    "La marea",
    "Coplas al agua",
    "La estrella azul",
    "Andando",
    "Cuando muere el angelito",
    "Angelita Rosales",
    "Seguidillas del laurel",
    "Charrada de los perros",
    "Charros españoles",
    "Un gran regalo",
  ];

  const radius = '20vw'; // Adjust the radius as needed

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      <div
        className="absolute left-1/2 top-1/2 animate-spinSlow"
        style={{
          transform: 'translate(-50%, -50%)',
          transformOrigin: '50% 50%',
        }}
      >
        {songNames.map((song, index) => {
          const angle = (360 / songNames.length) * index; // Angle in degrees
          return (
            <div
              key={index}
              className="absolute"
              style={{
                transform: `rotate(${angle}deg) translate(${radius}) rotate(-${angle}deg)`,
                transformOrigin: '0 0',
              }}
            >
              <span className="text-white">{song}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Xirgu;