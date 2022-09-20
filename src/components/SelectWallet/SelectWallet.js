import { Checkbox, Paper, Typography } from '@mui/material'
import React from 'react'

export default function SelectWallet({data,count,setCount}) {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        if(event.target.checked=== true){
            setCount(count+data.price);

        }
        else{
            setCount(count-data.price);

        }
      setChecked(event.target.checked);
    };
  return (
    <div style={{marginTop:'20px',marginBottom:'10px'}}>
          
      <Paper elevation={3} sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div>
            <Typography sx={{height:'25px',padding:'10px',display:'inline-block'}}>{data.title}</Typography>
       </div>       
        <div> 
            <Typography sx={{height:'25px',padding:'10px',display:'inline-block'}}> Price: ${data.price}</Typography>
        </div>   
        <div>
            <Typography sx={{height:'25px',padding:'10px',display:'inline-block'}}>Select</Typography>
        <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
        </div>    
        </Paper>

      
    </div>
  )
}
