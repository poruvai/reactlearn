import React from 'react'

function Map() {
  const data =['India','USA','UAE','UK']
  return (
  <div>
<ul>
{
data.map((value)=>(
<li>{value}</li>

))

}

</ul>

  </div>
  )
}

export default Map