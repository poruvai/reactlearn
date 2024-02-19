import React from 'react'

function Ifcondition() {

    const isBusismissed =true;
       
    let button;
    if (isBusismissed){
        button= <button>will go Train</button>
    }else{
        button= <button>No need other solution</button>
    }
     
  return (
    <div>
       {/*
      isBusismissed ? <h1>user is false</h1>:<h1>user is true</h1>
    
       <button >{button}</button>
       */}
              <button >{button}</button>
                </div>
  )
}

export default Ifcondition