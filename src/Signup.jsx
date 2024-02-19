import React, { useState } from 'react'

function Signup() {
    const [formData, setFormData]=useState ({
username:'',
password:''

    })

    const handleinputchange=(event)=>{
const{name,value} =event.target
setFormData ((prevData) =>({...prevData,[name]:value})  )

    }

const handleSubmit =(event)=>{
    event.preventDefault();
 console.log(formData,"The input data")   
}
    
  return (
    <div className='Signupcard'>
    <h1>Registraion Form </h1>
    <form onSubmit={handleSubmit}>
<label htmlFor=''>User Name:</label>
<input type='text' placeholder='User name'name="username" value = {formData.username}onChange={(event)=>handleinputchange(event)}/>

<label htmlFor=''>Pass word:</label>
<input type='password' placeholder='' name='password'value = {formData.password}onChange={(event)=>handleinputchange(event)}/>
<button type='submit'>Sign up</button>


    </form>
    </div>
  )
}

export default Signup