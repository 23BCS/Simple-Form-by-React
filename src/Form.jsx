import React, { useState } from 'react'

function Form() {
    const [formData, setFormData] = useState({
        fullName:"",
        userName:"",
        password:"",
    })
 const handleInputChange=(event)=>{
    const fieldName =event.target.name;
    const newValue =event.target.value;

    setFormData((currData)=>{
        return{
             ...currData,[fieldName]:newValue
        } 
        
    })
 }
const handleSubmit =(event)=>{
 event.preventDefult();
 setFormData({
    fullName:"",
    userName:"",
    password:"",
 })
}

  return (
 
        <form onSubmit={handleSubmit}>
             <label htmlFor="fullName">FullName </label>
            <input type="text"
            placeholder='enter Fullname'
            id='fullName' 
            name='fullName'
            onChange={ handleInputChange}
            value={formData.fullName}/>
            <br />
            <br />
            <br />
            <label htmlFor="userName">UserName </label>
            <input type="text"
            placeholder='enter Username'
            id='userName' 
            name='userName'
            onChange={ handleInputChange}
            value={formData.userName}/>
            <br /> 
            <br />
            <br />
            <label htmlFor="password">Password </label>
            <input type="text"
            placeholder='enter password'
            id='password' 
            name='password'
            onChange={ handleInputChange}
            value={formData.password}/>
            <br />
            <br />
            <br />
            <button type='submit'>Submit</button>
        </form>
      
   
  )
}

export default Form
