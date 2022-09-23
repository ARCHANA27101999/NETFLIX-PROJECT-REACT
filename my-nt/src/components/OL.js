import React, { useContext, useEffect, useState } from 'react'
import './OL.css'
import axios from 'axios'
import { PopularMovies ,imageUrl, API_KEY} from './url'
import {Card,Button} from 'react-bootstrap'
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom'
import { appcontext } from '../App'

function OL ({Url}) {
  const {value,value2}=useContext(appcontext)

  const [Show, setShow] = value2
  const [State, setState] = value
  const [first, setfirst] = useState("")
  const [movie, setMovie] = useState([])
  useEffect(() => {
    setState(movie)
    setShow(false)
    
    
   
  
    
  }, [movie,State])
  



  useEffect(() => {
   axios.get(Url).then((res)=>setMovie(res.data.results))

  //  console.log(movie);
    },[movie,PopularMovies])


    // const Trailer=(id)=>{
    //   console.log(id)
    //   axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{

    //    setfirst(res.data.results[0]);
    //    console.log(first);
    //   })

    // }
      





    const Trailer=(id)=>{
      axios.get({Url}).then((res)=>{
        console.log(res.data.results.id);

      })
    }

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    
    
 

  
  return (
   <div>
   
    <div className='row'>
      <div className='card1'>
   {movie.map((item,index)=>{


    return(
      
        
      
      <div className='card11'>
        <Card   >
        <Link to={`/Newfile/${index}`}>
          {/* onClick={()=>Trailer(item.id)} */}
      <Card.Body style={{color:"red",backgroundColor:"purple"}}  >
      <Card.Img  variant="top" src={imageUrl+item.poster_path} />
        <Card.Title>{item.title || item.name}</Card.Title>
        <Card.Title>{item.id}</Card.Title>
        <Card.Title>{item.original_language}</Card.Title>
        <Card.Title>{item.original_title}</Card.Title>
        <Card.Title>{item.popularity}</Card.Title>
        <Card.Title>{item.vote_average}</Card.Title>
        <Card.Title>{item.release_date}</Card.Title>
        <Card.Title>{item.overview}</Card.Title>
        <Card.Title>{item.vote_count}</Card.Title>
      </Card.Body>
        </Link>
    </Card>
        
        
        
    </div>
  
    
   
    )

   })}



  

   </div>
   </div>


   {/* <YouTube videoId={first.key} opts={opts}/> */}


   </div>
  
  )
}

export default OL