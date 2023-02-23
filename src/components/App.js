import React, { useEffect, useState } from "react";
import Puppy from "./Puppy"
import NavBar from "./NavBar"

function App() {

  const [puppies, setPuppies] = useState([])
  const [clickedPuppyId, setClickedPuppyId] = useState("")
  const [isFilterOn, setIsFilterOn] = useState(false)
  
  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((data) => data.json())
      .then((allpups) => setPuppies(allpups))
  }, [])

  function handleClick(puppy) {
    setClickedPuppyId(puppy.id)
  }

  //  

  const filteredPuppies = puppies.filter((puppy) =>{
    if (isFilterOn === true) {
      return puppy.isGoodDog === true
    } else {
      return true
    }
  })

  function handleUpdatedPuppy(newPuppy) {
    const updatedArray = puppies.map((puppy) => {
      if (puppy.id === newPuppy.id) {
        return newPuppy
      } else {
        return puppy
      }
    })
    setPuppies(updatedArray)
  }

  // if(!puppies) {
  //   return (
  //     <p>Loading.....</p>
  //   )
  // }

  function handleFilterClick() {
    setIsFilterOn((isFilterOn) => !isFilterOn)

  }

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={handleFilterClick}>Filter good dogs:{isFilterOn ? "OFF" : "ON"}</button>
      </div>
        <NavBar puppies={filteredPuppies} handleClick={handleClick}/>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <Puppy puppies={puppies} clickedPuppyId={clickedPuppyId} handleUpdatedPuppy={handleUpdatedPuppy}/>
        </div>
      </div>
    </div>
  );
}

export default App;
