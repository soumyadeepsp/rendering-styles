import React from 'react'

function Button({onClick, text}) {
    console.log("rendering button component for "+text);
  return (
    <button onClick={onClick}>
        {text}
    </button>
  )
}

export default React.memo(Button);