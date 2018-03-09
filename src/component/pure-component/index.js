import React from 'react';

var styleObject = {
  fontSize: "1em",
  backgroundColor: "grey",
  color: "white",
  margin: ".5em"
}

const HelloWorld = () => {
  const sayHi = (event) => {
    alert(`Hahahaha!! I am Computron! I have downloaded your passwords and eaten them!`);
  };

  return (
    <div>
      <a href="#"
        onClick={ sayHi }>
        <button style={ styleObject }>Say Hi</button>
      </a>
    </div>
  )

}

export default HelloWorld;
