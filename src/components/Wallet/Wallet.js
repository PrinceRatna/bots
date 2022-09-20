import { Paper } from '@mui/material'
import React, { useState } from 'react'
import dataFuntion  from '../../data'
import SelectWallet from '../SelectWallet/SelectWallet'
import {Typography} from '@mui/material'
export default function Wallet() {
  const [count,setCount]=useState(0)
  return (
  <div>
    <span style={{fontSize:'40px',color:"#e32b17",marginLeft:'10px'}}>Select Bots :</span>
          <br/><br/>
    {
      dataFuntion().map(data=><SelectWallet key={data.id} data={data} count={count} setCount={setCount}/>)
    }

    <div style={{textAlign:'center',marginBottom:'20px'}}>
        <span style={{fontSize:'40px',color:"#e32b17"}}>Conect Wallet </span><br/><br/>
        <Paper sx={{maxWidth:'500px', height:'250px',display:'block',marginX:'auto',backgroundColor:'#ded8e3'}} elevation={3} >
      <Typography sx={{padding:'50px',fontSize:'20px'}}>Total Price : $ {count}</Typography> 
       </Paper>
       </div>
    </div>
  )
}
