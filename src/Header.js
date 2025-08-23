import React from 'react'

function Header() {
    console.log("rendering header component");
  return (
    <div>We are learning how to optimise react performance!</div>
  )
}

export default React.memo(Header);