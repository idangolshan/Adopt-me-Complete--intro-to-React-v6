import Pet from "./Pet";

const Results = ({ pets }) =>  {
  return (
  <div className='search'>
    {!pets.length ? (
        <h2>No pets found!</h2>
    ) : (
        pets.map(pet => ( // We can also destructor pet with pets.map({name, animal, breed, id} =>
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        )))}
  </div>
  )

}


export default Results;
