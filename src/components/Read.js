import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import{Link} from "react-router-dom"
function Read() {
  const [data, setdata] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get('http://localhost:3031/users/' + id)
      .then(res => setdata(res.data))
      .catch(err => console.log(err))

  }, [])
  return (



      <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light vh-100' >
        <div className='w-50 border bg-white  shadow px-4 pt-3 pb-5  rounded'>
       <div className="mb-2">
        <strong>name:{data.name}</strong>
       </div>
       <div className="mb-2">
        <strong>email:{data.email}</strong>
       </div>
       <div className="mb-2">
        <strong>phone:<span>{data.phone}</span></strong>
       </div>
       <Link to={`/update/${id}`}className="btn btn-success">Edit</Link>
       <Link to="/"className="btn btn-success ms-5">back</Link>
        </div>
      </div>

  )
}

export default Read
