import React from 'react'
import dataFuntion from '../../data'
import ShortBotsCard from '../ShortBotsCard/ShortBotsCard'
export default function ForumPage() {
  return (
    <div>
       <div style={{textAlign:'center'}}>
        
        

        <span  style={{fontSize:'40px',color:"#e32b17",marginTop:'100px'}}>Bots</span>
        <br/><br/>
        <div style={{display:"flex",alignItems:'center',justifyContent:'space-between',flexWrap:'wrap'}}>
        {
            dataFuntion().map((data)=><ShortBotsCard key={data.id} data={data}/>)
        }
        </div>

      
    </div>
    </div>
  )
}
