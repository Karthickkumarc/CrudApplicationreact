import {useEffect} from 'react'
import{Link, useNavigate} from "react-router-dom";
import {useState}from "react";
import axios from 'axios';

function Create() {
    const[data,setdata]=useState([])
    const [values,setvalues]=useState({
        id:"",
        name:"",
        email:"",
        phone:""

     
})
useEffect(()=>{
    axios.get("http://localhost:3031/users")
    .then(res=>setdata(res.data))
    .catch(err=>console.log(err))

  },[])
const navigate=useNavigate();
const HandleChange=(e)=>{
    console.log("hi")
    e.preventDefault();
        
    axios.post("http://localhost:3031/users",values)
    .then(res=>
        {console.log(res)
            navigate('/')})
    .catch(err =>console.log(err))
   
}
    return (
        
            <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light vh-100' >
            
                <div className='w-50 border bg-white  shadow px-4 pt-3 pb-5  rounded'>
                <h1>ADD Of USER </h1>
                <form onSubmit={HandleChange}>
                <div className="mb-2">
                      <p>{data.id}</p>
                    </div>
                   <div className="mb-2">
                    <label htmlFor="name">NAME:</label>
                    <input type="text" name='name'className='form-control'placeholder='enter the name' onChange={(e)=>setvalues({...values,name:e.target.value})}/>
                   </div>
                   <div className="mb-2">
                    <label htmlFor="email">EMAIL:</label>
                    <input type="email" name='email'className='form-control'placeholder='enter the email'  onChange={(e)=>setvalues({...values,email:e.target.value})}/>
                   </div>
                   <div className="mb-2">
                    <label htmlFor="number">NUMBER:</label>
                    <input type="number" name='phone'className='form-control'placeholder='enter the email'  onChange={(e)=>setvalues({...values,phone:e.target.value})}/>
                   </div>
               <button className="btn btn-success">submit</button>
               <Link to="/" className="btn btn-primary ms-5">back</Link>
                </form>
                </div>
          
            </div>
            )
}

            export default Create;
