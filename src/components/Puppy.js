import React from "react"

function Puppy({ puppies, clickedPuppyId, handleUpdatedPuppy }) {

  //  const [goodPuppy, setGoodPuppy] = useState(clickedPuppyId.isGoodDog)

    const currentPuppy = puppies.find((puppy) => puppy.id === clickedPuppyId)

    console.log(clickedPuppyId)
    console.log(currentPuppy)

    if(clickedPuppyId === "") {
        return (
            <h3>Select a dog from above!</h3>
        )
    }

    function handleClickk() {

        // setGoodPuppy((goodPuppy) => !goodPuppy)

        fetch(`http://localhost:3001/pups/${clickedPuppyId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            isGoodDog: !currentPuppy.isGoodDog
          })
        })
        .then((data) => data.json())
        .then((newPuppy) => handleUpdatedPuppy(newPuppy))
      }

    return (
        <div>
          <img src={currentPuppy.image} alt={currentPuppy.name}/>
          <h2>{currentPuppy.name}</h2>
          <p>Would you like to change the dog to a:</p>
          <button onClick={handleClickk}> 
          {currentPuppy.isGoodDog ? "Bad Dog" : "Good Dog"} </button>
        </div>
    )
}

export default Puppy