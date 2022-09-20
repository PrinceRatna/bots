import React from 'react'
import BotsCard from '../BotsCard/BotsCard'
import dataFuntion  from '../../data'

export default function HomePage() {
  return (
    <div >
      <div style={{textAlign:'center'}}>
        
        

        <span  style={{fontSize:'40px',color:"#e32b17",marginTop:'100px'}}>Bots Details</span>
        <br/><br/>
        <div style={{display:"flex",alignItems:'center',justifyContent:'space-between',flexWrap:'wrap'}}>
        {
            dataFuntion().map((data)=><BotsCard key={data.id} data={data}/>)
        }
        </div>

      
    </div>
    </div>
  )
}
