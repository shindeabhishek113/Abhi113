import React, { useEffect, useState } from 'react'
import axios from 'axios'

function EmployeeList() {

    const[emparr,setemparr]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/employee')
        .then(resp=>{
            setemparr(resp.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
  return (
    <div>
    <ul>
        {
        emparr.map(emp=><li key={emp.empid}>empid:{emp.empid} Ename:{emp.ename} Salary:{emp.sal}</li>)    
        }
    </ul>

    </div>
  )
}

export default EmployeeList
