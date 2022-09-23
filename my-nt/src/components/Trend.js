import React, { useEffect, useState } from 'react'
import './Trend.css'
import axios, {} from 'axios'
import { LatestMovies,imageUrl } from './url'
import {Card } from 'react-bootstrap'

function Trend() {
  const [first, setfirst] = useState([])
  useEffect(() => {
   axios.get(LatestMovies).then((res)=>(
    setfirst(res.data.results)
    
    )
    
    )
    console.log(first)
  
  }, [first,LatestMovies])
  
  
  






  return (
    <>
        
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
<div className='row'>
      <div className='card1'>

   
{first.map((item)=>(
 <div className='card11'>
  

<Card >
   
   <Card.Body >
     <Card.Title>{item.title}</Card.Title>
     <Card.Title>{item.id}</Card.Title>
     <Card.Title>{item.original_language}</Card.Title>
     <Card.Title>{item.original_title}</Card.Title>
     <Card.Title>{item.popularity}</Card.Title>
     <Card.Title>{item.vote_average}</Card.Title>
     <Card.Title>{item.release_date}</Card.Title>
     <Card.Title>{item.overview}</Card.Title>
     <Card.Title>{item.vote_count}</Card.Title>
     <Card.Img variant="top" src={imageUrl+item.poster_path} />
     
   </Card.Body>
 </Card>


 </div>







  
 



  
))}
</div>

    </div> 
    </>   
   
  )
}

export default Trend