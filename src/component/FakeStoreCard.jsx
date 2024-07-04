import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FakeStoreCard = () => {

var[output,setOutput]=useState([])
 useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{console.log(res.data)
        setOutput(res.data)
    })
    .catch((error)=>{console.log(error)})
 },[])

  return (
    <div>
    <Grid sx={{ flexGrow:1 }} container spacing={4} direction="grid">
    {
    output.map((val,i)=> {
    return (
      <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia 
        sx={{ height: 340 , width: 340}}
        image={val.image}
        title=""
      />
      <CardContent>
        <div>
            <Typography gutterBottom variant="h6" component="div">
            ID:{val.id}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            Title:{val.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {val.description}
            </Typography>
        
        </div>
      </CardContent>   
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    )
    }) 
    }
    </Grid>
    </div>
  )
}

export default FakeStoreCard
