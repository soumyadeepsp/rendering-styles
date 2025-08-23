import React from 'react'

function Count({text, count}) {
    console.log("rendering count component for "+text);
  return (
    <div>{`Showing ${text} : ${count}`}</div>
  )
}

export default React.memo(Count);