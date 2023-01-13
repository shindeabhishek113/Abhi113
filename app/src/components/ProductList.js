
import axios from 'axios';
import React, { useEffect, useState } from 'react';



function ProductList() {
    const[prodarr,setprodarr]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:4000')
        .then(resp =>{
          setprodarr(resp.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
  return (
    <div>
      <ul>
        {
          
          prodarr.map(prod=><li key={prod.pid}>pid:{prod.pid} pname:{prod.pname} Price:{prod.price}</li>)
          
       
        }
        
      </ul>
    </div>
  )
}

export default ProductList
