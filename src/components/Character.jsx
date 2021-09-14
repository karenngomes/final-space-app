

const Character = ({ character }) => {
  return (
    <div>
      <img alt="Character" src={character.img_url} />
      <p>Nome: {character.name}</p>
      <p>Espécie: {character.species}</p>
    </div>
  );
};

export default Character;
