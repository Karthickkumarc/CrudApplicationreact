import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useState,useEffect } from 'react';

function Update() {
  // const [data, setdata] = useState([]);
  const { id } = useParams();
  const [values,setvalues]=useState({
    name:"",
    email:"",
    phone:"" 
})

const navigate=useNavigate();
  useEffect(() => {
    axios.get('http://localhost:3031/users/' + id)
      .then(res => setvalues(res.data))
      .catch(err => console.log(err))

  }, [])
  const handleUpdate=(e)=>{
    e.preventDefault();
 
    axios.put("http://localhost:3031/users/"+ id,values)
    .then(res=>
        {console.log(res)
            navigate('/')})
    .catch(err =>console.log(err))
  }

  return (
   
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light vh-100' >
            
    <div className='w-50 border bg-white  shadow px-4 pt-3 pb-5  rounded'>
    <h1>UPDATE USER </h1>
    <form onSubmit={handleUpdate}>
       <div className="mb-2">
        <label htmlFor="name">NAME:</label>
        <input type="text" name='name'className='form-control'placeholder='enter the name' value={values.name} onChange={(e)=>setvalues({...values,name:e.target.value})}/>
       </div>
       <div className="mb-2">
        <label htmlFor="email">EMAIL:</label>
        <input type="email" name='email'className='form-control'placeholder='enter the email' value={values.email} onChange={(e)=>setvalues({...values,email:e.target.value})}/>
       </div>
       <div className="mb-2">
        <label htmlFor="number">NUMBER:</label>
        <input type="number" name='phone'className='form-control'placeholder='enter the email' value={values.phone} onChange={(e)=>setvalues({...values,phone:e.target.value})}/>
       </div>
   <button className="btn btn-success">Update</button>
   <Link to="/" className="btn btn-primary ms-5">back</Link>
    </form>
    </div>

</div> 
  )
}

export default Update
