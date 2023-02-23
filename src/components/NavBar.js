import React from "react";

function NavBar({ puppies, handleClick }) {

    const navBarPuppies = puppies.map((puppy) => {
        return <span key={puppy.id} onClick={() => handleClick(puppy)} >{puppy.name}</span>
      })

    return (
        <div id="dog-bar">
            {navBarPuppies}  
        </div>
       
    )
}

export default NavBar