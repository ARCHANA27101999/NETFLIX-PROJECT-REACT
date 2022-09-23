import React, { useEffect, useState } from 'react'
import './New.css'
import axios from 'axios'
import { Originals,imageUrl } from './url'
import {Card} from 'react-bootstrap'


function New() {
  const [first1, setfirst1] = useState([])

useEffect(() => {
  axios.get(Originals).then((res)=>(
    setfirst1(res.data.results)

  ))
  

  // console.log(first1);
  
}, [first1,Originals])




  return (
   <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className='row'>
    <div div className='card1'>
    
    

  {
 first1.map((item)=>(
  <div className="card11">

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
  
))
}  
























{/* <h2>Made in India</h2>
    <div>
          <div className='row2'>




<div className='card12'>
<img   className='card11' src="https://tse4.mm.bing.net/th?id=OIP.Y2WVkPybbxq3jZ672TdUOQHaEK&pid=Api&P=0"></img>
<img   className='card11' src="https://tse2.mm.bing.net/th?id=OIP.DR2VpDwJ4YgLJ1JY2wnTIwHaD4&pid=Api&P=0"></img>
<img   className='card11' src="https://tse1.mm.bing.net/th?id=OIP.ovX2djOTlaWRQ7X1jNTW0gHaFj&pid=Api&P=0"></img>
<img   className='card11' src="https://tse1.explicit.bing.net/th?id=OIP.XJBzWcXBT7yDxaDw-s--nAHaD4&pid=Api&P=0"></img>
<img   className='card11' src="https://tse3.explicit.bing.net/th?id=OIP.eUuZc4m0GPLwYxk0haTZ-QHaEH&pid=Api&P=0"></img>
<img   className='card11' src="https://i.pinimg.com/originals/c8/29/18/c829182af9c4264701daee5d243d4962.png"></img>
<img   className='card11' src="https://i.pinimg.com/originals/c8/29/18/c829182af9c4264701daee5d243d4962.png"></img>
<img   className='card11' src="https://i.pinimg.com/originals/c8/29/18/c829182af9c4264701daee5d243d4962.png"></img>
<img   className='card11' src="https://i.pinimg.com/originals/c8/29/18/c829182af9c4264701daee5d243d4962.png"></img>
<img   className='card11' src="https://i.pinimg.com/originals/c8/29/18/c829182af9c4264701daee5d243d4962.png"></img>
<img   className='card11' src="https://i.pinimg.com/originals/c8/29/18/c829182af9c4264701daee5d243d4962.png"></img>
<img   className='card11' src="https://i.pinimg.com/originals/c8/29/18/c829182af9c4264701daee5d243d4962.png"></img>
<img   className='card11' src="https://i.pinimg.com/originals/c8/29/18/c829182af9c4264701daee5d243d4962.png"></img>
<img   className='card11' src="https://i.pinimg.com/originals/c8/29/18/c829182af9c4264701daee5d243d4962.png"></img>


</div>


</div>
</div> */}









</div>
</div>
</>
        
  )
}

export default New